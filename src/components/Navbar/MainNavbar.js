import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '@context';

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function MainNavbar() {
  const { currentUser, logout } = useAuthContext();
  const { history } = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/');
    } catch {}
  };

  return (
    <Navbar bg='light' variant='light' className='py-4'>
      <Container>
        <Row>
          <Col sm={12}>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <h4 className='mb-0'>Learner management system</h4>
                <span className='text-secondary'>
                  <small>Technical challenge for DigitalGrads</small>
                </span>
              </Navbar.Brand>
            </LinkContainer>
          </Col>
          {currentUser && currentUser.email && (
            <Col sm={12}>
              <Link to='/' onClick={handleLogout}>
                Logout
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

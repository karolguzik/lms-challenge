import React from 'react';
import homeImage from '@assets/img/home.svg';

import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className='py-4'>
      <Row className='d-flex align-items-center'>
        <Col sm={12} lg={6} className='text-center text-lg-start mb-5 mt-lg-5'>
          <h1>Welcome in LMS</h1>
          <p>Start management your learners from now!</p>
          <LinkContainer to='/login'>
            <Button variant='outline-primary' className='mx-1'>
              Login
            </Button>
          </LinkContainer>
          <LinkContainer to='/register'>
            <Button className='mx-1'>Register</Button>
          </LinkContainer>
        </Col>
        <Col lg={6} className='d-flex justify-content-center mt-lg-5'>
          <img
            className='home__image'
            src={homeImage}
            alt='Content displaying application goals'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;

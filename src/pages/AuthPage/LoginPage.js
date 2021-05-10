import React from 'react';
import loginImage from '@assets/img/login.svg';

import { Container, Row, Col } from 'react-bootstrap';

import PreviousPage from '@components/PreviousPage/PreviousPage';
import SidebarImage from '@components/Sidebar/SidebarImage';
import { LoginForm } from '@components/Form';

function LoginPage() {
  return (
    <Container>
      <Row>
        <Col sm={12} className='my-4'>
          <PreviousPage />
        </Col>
        <Col xs={12} lg={6}>
          <h3 className='mb-4'>Log in</h3>
          <LoginForm />
        </Col>
        <SidebarImage image={loginImage} />
      </Row>
    </Container>
  );
}

export default LoginPage;

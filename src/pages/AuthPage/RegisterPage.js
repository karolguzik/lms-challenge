import React from 'react';
import registerImage from '@assets/img/register.svg';

import { Container, Row, Col } from 'react-bootstrap';

import PreviousPage from '@components/PreviousPage/PreviousPage';
import SidebarImage from '@components/Sidebar/SidebarImage';
import { RegisterForm } from '@components/Form';

function RegisterPage() {
  return (
    <Container>
      <Row>
        <Col sm={12} className='my-4'>
          <PreviousPage />
        </Col>
        <Col xs={12} lg={6}>
          <h3 className='mb-4'>Register</h3>
          <RegisterForm />
        </Col>
        <SidebarImage image={registerImage} />
      </Row>
    </Container>
  );
}

export default RegisterPage;

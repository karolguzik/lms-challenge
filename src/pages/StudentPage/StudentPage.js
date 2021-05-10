import React from 'react';
import { useStudentContext } from '@context';

import { Container, Row, Col } from 'react-bootstrap';

import PreviousPage from '@components/PreviousPage/PreviousPage';
import { StudentDetails } from '@components/Student';
import { UpdateStudentForm } from '@components/Form';

function StudentPage() {
  return (
    <Container className='py-4'>
      <Row>
        <Col sm={12} className='mb-4'>
          <PreviousPage path='/dashboard' />
        </Col>
        <Col xs={12} className='d-flex justify-content-center'>
          <StudentDetails />
          <UpdateStudentForm show={false} />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentPage;

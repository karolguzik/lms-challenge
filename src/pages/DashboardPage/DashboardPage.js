import React, { useEffect } from 'react';
import { useStudentContext } from '@context';

import { Container, Row, Col, Spinner } from 'react-bootstrap';

import AddStudentJumbotron from '@components/Jumbotron/AddStudentJumbotron';
import { StudentList, StudentAverage } from '@components/Student';
import { AddStudentForm } from '@components/Form';

function DashboardPage() {
  const { getAllStudents, students, loading, error } = useStudentContext();

  useEffect(() => {
    getAllStudents();
  }, [students]);

  return (
    <Container className='py-4'>
      <Row className='d-flex justify-content-lg-center'>
        <Col sm={12} md={6} lg={5} className='mb-5'>
          <AddStudentJumbotron />
        </Col>
        <Col md={6} lg={1}></Col>
        <Col sm={12} md={6} lg={5}>
          <StudentAverage />
        </Col>
        <Col sm={12}>
          {loading && <Spinner animation='border'></Spinner>}
          {error ? <span className='text-muted'>{error}</span> : <StudentList students={students} />}
          <AddStudentForm show={false} />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;

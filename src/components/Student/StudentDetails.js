import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStudentContext } from '@context';

import { Card, Button, Spinner, Alert } from 'react-bootstrap'

import {StudentImage} from '@components/Student'

function StudentDetails() {
  const { getStudent, student } = useStudentContext();
  const { id } =  useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleStudent();
  }, [student])

  const handleStudent = async () => {
    try {
      setLoading(true);
      await getStudent(id);
      setLoading(false);
    } catch {
      setError('Something went wrong with loading student.')
    }
  }

  return (
    <Card className='student__details bg-light border-dark p-2'>
      {loading && <Spinner animation='border'></Spinner>}
      {error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Alert>
        <StudentImage />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>Tom Bills</Card.Title>
          <Card.Text>Firstname</Card.Text>
          <Card.Text>Lastname</Card.Text>
          <Card.Text>Email</Card.Text>
          <Card.Text>Score</Card.Text>
          <Button className='align-self-center' variant='outline-dark'>
            Update
          </Button>
        </Card.Body>
        </Alert>
      )}
    </Card>
  );
}

export default StudentDetails;

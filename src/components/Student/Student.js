import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { StudentImage } from '@components/Student';

function Student({ id, firstname }) {
  return (
    <div className='d-flex flex-column align-items-center mx-3 my-3'>
      <StudentImage />
      <h4>{firstname}</h4>
      <LinkContainer to={`/student/${id}`}>
        <Button variant='outline-dark' size='sm'>
          More
        </Button>
      </LinkContainer>
    </div>
  );
}

export default Student;

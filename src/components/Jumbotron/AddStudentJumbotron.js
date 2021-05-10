import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

function AddStudentJumbotron() {
  return (
    <Jumbotron className='jumbotron p-3'>
      <h1>Add new student!</h1>
      <p>Give a chance to new happy student!</p>
      <Button variant='dark'>Add now</Button>
    </Jumbotron>
  );
}

export default AddStudentJumbotron;

import React from 'react';

import { Card } from 'react-bootstrap';

function StudentAverage() {
  return (
    <>
      <h3>Our students average</h3>
      <Card className='student__average'>
        <Card.Body className='d-flex justify-content-center'>
          <Card.Title>7.4</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default StudentAverage;

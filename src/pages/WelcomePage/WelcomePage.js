import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import welcomeImage from '@assets/img/welcome.svg';

import { Container, Row, Col } from 'react-bootstrap';

function WelcomePage() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  });

  return (
    <Container className='py-5'>
      <Row>
        <Col className='text-center text-md-start'>
          <h2>Welcome!</h2>
          <p>Now you can manage in your application!</p>
          <span className='text-muted'>
            <small>
              We will automaticly redirect you on login page in second.
            </small>
          </span>
        </Col>
        <Col className='d-flex justify-content-center'>
          <img
            className='welcome__image'
            src={welcomeImage}
            alt='Content displaying successfull registration'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomePage;

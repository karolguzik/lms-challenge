import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '@context';

import { Link } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

function RegisterForm() {
  const { register } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const [validationError, setValidationError] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleValidation = () => {
    let emailRegex = /\S+@\S+\.\S+/;

    if (
      emailRef.current.value === '' ||
      !emailRegex.test(emailRef.current.value) ||
      passwordRef.current.value === ''
    ) {
      setValidationError('Please fill up correct form values.');
      return false;
    } else {
      return true;
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        setLoading(true);
        await register(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
        history.push('/welcome');
      } catch {
        setError('Something went wrong with creating an account.');
        setLoading(false);
      }
    }
  };

  return (
    <Form>
      {validationError && <Alert variant='danger'>{validationError}</Alert>}
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className='mb-4'>
        <Form.Control
          type='email'
          name='email'
          ref={emailRef}
          placeholder='Email'
        />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Control
          type='password'
          name='password'
          ref={passwordRef}
          placeholder='Password'
        />
      </Form.Group>
      {loading ? (
        <Button>
          <Spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </Button>
      ) : (
        <Button variant='primary' type='submit' onClick={handleSubmitForm}>
          Submit
        </Button>
      )}
      <Form.Group className='mb-5'>
        <Form.Text className='text-muted'>
          Already have an account? <Link to='/login'>Log in.</Link>
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default RegisterForm;

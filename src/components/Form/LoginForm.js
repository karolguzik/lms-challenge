import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '@context';

import { Link } from 'react-router-dom';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

function LoginForm() {
  const { login } = useAuthContext();
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
      setValidationError('Invalid credentials!');
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        setLoading(false);
        history.push('/dashboard');
      } catch {
        setError('Something went wrong with login into account.');
        setLoading(false);
      }
    }
  };

  return (
    <Form>
      {validationError && <Alert variant='danger'>{validationError}</Alert>}
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className='mb-4'>
        <Form.Control type='email' name="email" ref={emailRef} placeholder='Email' />
      </Form.Group>
      <Form.Group className='mb-4'>
        <Form.Control type='password' name="password" ref={passwordRef} placeholder='Password' />
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
        <Button variant='primary' type='submit' onClick={handleLogin}>
          Submit
        </Button>
      )}
      <Form.Group className='mb-5'>
        <Form.Text className='text-muted'>
          Do not have an account yet? <Link to='/register'>Register.</Link>
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default LoginForm;

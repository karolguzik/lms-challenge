import React from 'react';

import { Modal, Form, Button } from 'react-bootstrap';

function AddStudentForm({ show }) {
  return (
    <Modal show={show} aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title>Add new student</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-4'>
            <Form.Control type='text' placeholder='Firstname' />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Control type='text' placeholder='Lastname' />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Control type='email' placeholder='Email' />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Control type='number' placeholder='Score' />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-center'>
        <Button variant='primary'>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStudentForm;

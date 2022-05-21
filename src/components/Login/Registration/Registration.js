import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const Registration = () => {

  const { handleRegistration, handleEmailChange, handlePasswordChange } = useFirebase();

  return (
    <div>
      <h2>Register</h2>
      <Form className='container-sm' onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />
        </Form.Group>
        <>

          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter password"
            onBlur={handlePasswordChange}
          />
        </>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
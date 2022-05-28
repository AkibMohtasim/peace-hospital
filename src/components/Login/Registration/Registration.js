import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {

  const { handleRegistration, handleEmailChange, handlePasswordChange, handleGoogleLogin } = useAuth();

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
        <br /><br />
        <p>or,</p>
        <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
      </Form>
      <br />
      <Link to='/login'>Already Registered? Login </Link>
      <br /><br />
    </div>
  );
};

export default Registration;
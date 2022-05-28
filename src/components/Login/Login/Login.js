import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
  const { signInUsingGoogle, handleSignInWithEmailPassword, handleEmailChange, handlePasswordChange } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        console.log(result.user);
        navigate(redirect_uri);
      })
  }
  return (
    <div>
      <h2>Please Login</h2>

      <Form className='container-sm' onSubmit={handleSignInWithEmailPassword}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailChange} />
        </Form.Group>

        <>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onBlur={handlePasswordChange}
          />
        </>
        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <br />
      <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button> <br /><br />
      <Link to='/registration'>New User? Please Register </Link> <br /><br />
    </div>
  );
};

export default Login;
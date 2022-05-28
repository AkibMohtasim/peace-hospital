import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand>Peace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-dark px-5 text-decoration-none' to='/home'>Home</Link>
            <Link className='text-dark px-5 text-decoration-none' to='/appointment'>Appointment</Link>

            {user?.email ? <Button variant="outline-secondary" size="sm" onClick={logOut}>Log Out</Button> :
              <Link className='text-dark px-5 text-decoration-none' to='/login'>Login</Link>
            }
            
            {
              user?.email && <span className='mx-5'>{user.displayName}</span>
            }



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default Header;
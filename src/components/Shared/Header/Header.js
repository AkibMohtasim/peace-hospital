import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Peace</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='text-white px-5 text-decoration-none' to='/home'>Home</Link>
            <Link className='text-white px-5 text-decoration-none' to='/login'>Login</Link>
            <Link className='text-white px-5 text-decoration-none' to='/appointment'>Appointment</Link>
            {user?.email && <button onClick={logOut}>Log Out</button>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
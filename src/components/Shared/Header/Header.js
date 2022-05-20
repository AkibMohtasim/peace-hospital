import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Peace</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='text-white px-5 text-decoration-none' to='/home'>Home</Link>
            <Link className='text-white px-5 text-decoration-none' to='/features'>Features</Link>
            <Link className='text-white px-5 text-decoration-none' to='/pricing'>Pricing</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
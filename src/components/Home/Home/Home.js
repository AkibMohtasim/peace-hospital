import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../../Login/Login/Login';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <Container fluid='md'>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </Container>
  );
};

export default Home;
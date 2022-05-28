import React from 'react';
import { Container } from 'react-bootstrap';
import Services from '../../Services/Services';
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
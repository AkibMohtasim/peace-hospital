import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/about/about-img.jpg'

const About = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <img src={aboutImg} className='img-fluid' alt="" />
        </Col>
        <Col>
          <p>About Us</p>
          <h3>Serving people for more than 15 years</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error, vel, iusto rerum natus animi accusamus quos earum voluptates quibusdam quae, assumenda recusandae corrupti dicta.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
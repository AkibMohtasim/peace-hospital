import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, description } = service;
  return (
    <Col lg={3} md={4} sm={12}>
      <Card variant='align-items-stretch'>
        <Card.Img variant="top mx-auto w-50 my-4" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div className='bullet-points'>
            <p><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon> Doctor Consultancy</p>
            <p><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon> Medical Test</p>
            <p><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon> ICU or Cabin</p>
          </div>
          {/* <Card.Text>
            {description}
          </Card.Text> */}
          <Link to='/details'><Button variant="outline-secondary mb-3">Details</Button></Link> 
          <br />
          <Link to='/appointment'><Button variant="outline-secondary mb-3">Schedule an appointment</Button></Link>
        </Card.Body>
      </Card>
    </Col>

  );
};

export default Service;
import React from 'react';
import { Button, Col, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import './Appointment.css';

const Appointment = () => {
  return (
    <div className='bg'>
      <div>
        <br />
        <p className='text-light'>Doctor Appointment</p>
        <h2 className='text-light'>Book your appointment for a doctor</h2>
        <br />
      </div>
      <Form className='p-5 container-sm mx-auto form-background'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="Phone No." />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control placeholder="Address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Select a department">
              <option>Select a department</option>
              <option>Detal Care</option>
              <option>Mental Health Care</option>
              <option>Laboratory and Diagnostic</option>
              <option>Substance Abuse</option>
              <option>Physical and Occupational Therapy</option>
              <option>Nutritional Support</option>
              <option>Pharmaceutical Care</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Select a Doctor">
              <option>Select a Doctor</option>
              <option>Doctor A</option>
              <option>Doctor B</option>
              <option>Doctor C</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId="formGridState" className='d-flex align-items-center justify-content-start'>
            <Form.Label className='me-4 text-white'>Available Date and Time:</Form.Label>
            <Form.Control className='w-25 me-3' type="date" name="dob" placeholder="Date of Birth" />
            <Form.Control className='w-25' type="time" name="dob" placeholder="Date of Birth" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <InputGroup>
            <FormControl as="textarea" rows={6} aria-label="With textarea" placeholder='Write Down the Problem' />
          </InputGroup>
        </Row>

        <Button variant="outline-light px-5 mt-1 rounded-pill" type="submit">
          BOOK AN APPOINTMENT
        </Button>
      </Form>
    </div>
  );
};

export default Appointment;
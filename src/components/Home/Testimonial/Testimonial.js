import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = () => {
  return (
    <div className="border border-warning p-5 mb-4">
      <h5 className='text-warning'>Testimonial</h5>
      <h2 className='text-secondary'>What People Say</h2>
      <div className='my-3'>
        <Card>
          <Card.Header><FontAwesomeIcon icon={faQuoteLeft} /> <FontAwesomeIcon icon={faQuoteRight} /></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p className='fs-6'>
                {' '}
                Thank you Dr. jerin khondoker for the great experience and quality work you have done on my teeth.
                Dr. Jerin khondoker is an excellent dentist. she was very supportive, caring and thorough when explaining the process, She took the enough time to every work she was doing.
                She is a professional and has a naturally lovely personality. I would recommend Dr. jerin khondokor to everyone. She is the best dentist I have ever had.{' '}
              </p>
              <br />
              <footer className="blockquote-footer">
              Zahidur Rahman <cite title="Source Title">from Dhanmondi, Dhaka</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header><FontAwesomeIcon icon={faQuoteLeft} /> <FontAwesomeIcon icon={faQuoteRight} /></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p className='fs-6'>
                {' '}
                I am very pleased with my experience in Peace Hospital, this was my first time in this Hospital and the experience was a world away from previous experiences elsewhere, it was good to be treated with care and professionalism, I am truly grateful and appreciate their follow-up and the doctor’s care made me feel I was in safe hands - thank you so much.{' '}
              </p>
              <br />
              <footer className="blockquote-footer">
              Monir Uzzaman <cite title="Source Title">from Dhaka</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Testimonial;
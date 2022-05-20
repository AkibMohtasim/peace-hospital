import { faEnvelopeOpenText, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-dark'>
      <div className='d-flex flex-wrap bg-dark mt-5 text-white'>
        <div className="w-50 mt-5 mx-5 d-flex flex-column text-start">
          <h3>Peace Hospital</h3>
          <p><FontAwesomeIcon className='mx-2' icon={faMapLocationDot}></FontAwesomeIcon> Kolabagan, Dhaka - 1273</p>
          <p><FontAwesomeIcon className='mx-2' icon={faEnvelopeOpenText}></FontAwesomeIcon> peacehospitalbd@hotmail.com</p>
          <p><FontAwesomeIcon className='mx-2' icon={faPhone}></FontAwesomeIcon> 01700000000</p>
        </div>
        <div className="w-25 mt-5">
          <h4>Open for 24/7</h4>
          <Link to='/service'>Services</Link> <br />
          <Link to='/about'>About Us</Link> <br />
          <Link to='/success'>Success</Link> <br />
          <Link to='/support'>Support</Link>
        </div>
      </div>
      <div>
        <span className='text-white'>All rights reserved &copy; Akib Mohtasim</span>
      </div>
    </div>
  );
};

export default Footer;
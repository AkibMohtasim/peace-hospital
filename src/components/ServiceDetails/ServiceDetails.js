import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const {serviceId} = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`./serviceDetails.json`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, []);

  console.log(details[serviceId])
  return (
    <div className='w-75 mx-auto mt-5'>
      <h2 className='text-warning'>Details about the Service</h2>
      <br /><br />
      <img className='w-25 mx-auto mb-4' src={details[serviceId]?.img} alt="" />
      <p className='my-4'>{details[serviceId]?.description}</p>
      <Link to='/appointment'><Button variant="outline-secondary mb-3">Schedule an appointment</Button></Link>
    </div>
  );
};

export default ServiceDetails;
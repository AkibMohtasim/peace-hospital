import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const {serviceId} = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/serviceDetails.json`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, []);

  console.log(details[serviceId])
  return (
    <div>
      <h2>Details</h2>
      <p>{details[serviceId]}</p>
      <Link to='/appointment'><Button variant="outline-secondary mb-3">Schedule an appointment</Button></Link>
    </div>
  );
};

export default ServiceDetails;
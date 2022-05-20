import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Home/Service/Service';
import './Services.css';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='my-5 align-items-stretch'>
      <div>
        <h2>Department and Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque beatae dicta quasi earum molestias excepturi iste laborum sed adipisci doloribus natus sint itaque, similique ad, optio ab quos voluptate.</p>
        <br />
      </div>
      <Row className="g-4">
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </Row>


    </div>
  );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';
// import notFound from '../../../images/error-404/error404.jpg';
import './NotFound.css';


const Notfound = () => {
  return (
    <div className='not-found-404'>
      {/* <img style={{width: '100%'}} src={notFound} alt="" /> */}
      <Link to='/home'><button className="btn-info">Go back</button></Link>
    </div>
  );
};

export default Notfound;
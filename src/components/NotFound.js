import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-not-found'>
      <div>Error 404</div>
      <div>Page not found, please go Home</div>
      <Link to='/' className='nav__item'>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;

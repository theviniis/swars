import React from 'react';

const Avatar = ({ src }) => {
  return (
    <img src={src} alt='User avatar' title='User avatar' className='avatar' />
  );
};

export default Avatar;

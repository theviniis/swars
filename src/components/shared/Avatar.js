import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const Avatar = () => {
  const global = React.useContext(GlobalContext);
  return (
    <img
      src={global.avatar}
      alt='User avatar'
      title='User avatar'
      className='avatar'
    />
  );
};

export default Avatar;

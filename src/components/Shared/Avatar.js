import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const Avatar = () => {
  const { user } = React.useContext(GlobalContext);
  return (
    <img
      src={user.avatar}
      alt='User avatar'
      title='User avatar'
      className='avatar'
    />
  );
};

export default Avatar;

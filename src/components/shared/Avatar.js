import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const Avatar = ({ url }) => {
  const global = React.useContext(GlobalContext);
  return (
    <img
      src={global.user.avatar}
      alt='User avatar'
      title='User avatar'
      className='avatar'
    />
  );
};

export default Avatar;

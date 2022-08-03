import React from 'react';
import Avatar from '../Shared/Avatar';
import { ReactComponent as SeeMore } from '../../assets/see-more.svg';
import { GlobalContext } from '../../GlobalContext';

const ProfileCard = () => {
  const { user } = React.useContext(GlobalContext);

  return (
    <div className='nav__profile'>
      <Avatar />
      <div className='profile__info'>
        <span className='user-name'>{user.name}</span>
        <span className='user-url'>{user.url}</span>
      </div>
      <SeeMore />
    </div>
  );
};

export default ProfileCard;

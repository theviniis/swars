import React from 'react';
import Avatar from '../shared/Avatar';
import { ReactComponent as SeeMore } from '../../assets/see-more.svg';
import { GlobalContext } from '../../GlobalContext';

const ProfileCard = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div className='nav__profile'>
      <Avatar />
      <div className='profile__info'>
        <span className='user-name'>{global.user.name}</span>
        <span className='user-url'>{global.user.url}</span>
      </div>
      <SeeMore />
    </div>
  );
};

export default ProfileCard;

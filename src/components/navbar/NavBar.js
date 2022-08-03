import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavList from './NavList';
import ProfileCard from './ProfileCard';

const NavBar = () => {
  return (
    <>
      <nav className={'nav'}>
        <Logo className='logo' />
        <NavList />
        <ProfileCard />
      </nav>
    </>
  );
};

export default NavBar;

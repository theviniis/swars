import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import useMedia from '../../hooks/useMedia';
import NavList from './NavList';
import ProfileCard from './ProfileCard';

const NavBar = () => {
  const mobile = useMedia('(max-width: 600px)');
  console.log(mobile);
  return (
    <>
      <nav className={`nav ${mobile ? 'mobile' : ''}`}>
        <Logo className='logo' />
        <NavList />
        <ProfileCard />
      </nav>
    </>
  );
};

export default NavBar;

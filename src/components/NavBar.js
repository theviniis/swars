import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as SeeMore } from '../assets/see-more.svg';
import Avatar from './shared/Avatar';
import { GlobalContext } from '../GlobalContext';

const sections = [
  {
    name: 'Home',
    icon: 'home',
    url: '',
  },
  {
    name: 'Worlds',
    icon: 'public',
    url: '',
  },
  {
    name: 'Species',
    icon: 'diversity_3',
    url: '',
  },
];

const NavBar = () => {
  const global = React.useContext(GlobalContext);
  return (
    <nav className='nav'>
      <Logo className='logo' />
      <ul className='nav__list'>
        {sections.map((section) => (
          <li className='nav__item' key={section.name} url={section.url}>
            <span className='material-icons nav-icon'>{section.icon}</span>
            <span className='section'>{section.name}</span>
          </li>
        ))}
      </ul>
      <div className='nav__profile'>
        <Avatar />
        <div className='profile__info'>
          <span className='user-name'>{`${global.firstName} ${global.lastName}`}</span>
          <span className='user-url'>{global.url}</span>
        </div>
        <SeeMore />
      </div>
    </nav>
  );
};

export default NavBar;

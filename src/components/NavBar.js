import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

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
    icon: 'public',
    url: '',
  },
];

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Logo className='logo' />
      <ul className='nav-bar__list'>
        {sections.map((section) => (
          <li className='nav-bar__item' key={section.name} url={section.url}>
            <span className='material-icons icon'>{section.icon}</span>
            <span className='section'>{section.name}</span>
          </li>
        ))}
      </ul>
      <div className='nav-bar__profile'>
        <div className='profile__img'></div>
        <div className='profile__info'>
          <span>Vinícius Costa</span>
          <span>@theviniis</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

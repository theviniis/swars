import React from 'react';
import { NavLink } from 'react-router-dom';

const sections = [
  {
    name: 'Feed',
    icon: 'home',
    url: '/',
  },
  {
    name: 'Worlds',
    icon: 'public',
    url: '/worlds',
  },
  {
    name: 'Species',
    icon: 'diversity_3',
    url: '/species',
  },
];

const NavList = () => {
  return (
    <ul className='nav__list'>
      {sections.map((section) => (
        <NavLink
          to={section.url.toLowerCase()}
          className='nav__item'
          key={section.name}
        >
          <span className='material-icons nav-icon'>{section.icon}</span>
          <span className='section'>{section.name}</span>
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;

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
        //maps sections redering each section passing the object params
        <NavLink
          to={section.url.toLowerCase()}
          className='nav__item'
          key={section.name}
        >
          <span className='material-symbols-outlined google-icon'>
            {section.icon}
          </span>
          <span className='section'>{section.name}</span>
        </NavLink>
      ))}
    </ul>
  );
};

export default NavList;

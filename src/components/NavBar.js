import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import avatar from '../assets/avatar.png';
import { ReactComponent as SeeMore } from '../assets/see-more.svg';
import Avatar from './shared/Avatar';

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
  return (
    <nav className='nav'>
      <Logo className='logo' />
      <ul className='nav__list'>
        {sections.map((section) => (
          <li className='nav__item' key={section.name} url={section.url}>
            <span className='material-icons icon'>{section.icon}</span>
            <span className='section'>{section.name}</span>
          </li>
        ))}
      </ul>
      <div className='nav__profile'>
        <Avatar src={avatar} />
        <div className='profile__info'>
          <span className='title'>Storm Trooper</span>
          <span className='url'>@stormtrooper</span>
        </div>
        <SeeMore />
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';

const NavItem = ({ section }) => {
  return (
    <li className={'nav__item'} key={section.name} url={section.url}>
      <span className='material-icons nav-icon'>{section.icon}</span>
      <span className='section'>{section.name}</span>
    </li>
  );
};

export default NavItem;

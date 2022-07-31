import React from 'react';

const NavItem = ({ section }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <li
      className={`nav__item ${isActive ? 'is-active' : ''}`}
      key={section.name}
      url={section.url}
      onClick={() => setIsActive(!isActive)}
    >
      <span className='material-icons nav-icon'>{section.icon}</span>
      <span className='section'>{section.name}</span>
    </li>
  );
};

export default NavItem;

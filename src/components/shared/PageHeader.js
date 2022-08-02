import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const PageHeader = ({ children }) => {
  const { isNavBarVisible, setIsNavBarVisible } =
    React.useContext(GlobalContext);

  return (
    <div className='page-header__title'>
      <a href='#'>{children}</a>
      <span
        className={`material-symbols-outlined google-icon icon ${
          isNavBarVisible ? 'is-active' : ''
        }`}
        onClick={() => setIsNavBarVisible(!isNavBarVisible)}
      >
        chat
      </span>
    </div>
  );
};

export default PageHeader;

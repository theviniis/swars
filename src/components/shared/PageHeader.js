import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const PageHeader = ({ children }) => {
  const { isNavBarVisible, setIsNavBarVisible, mobile } =
    React.useContext(GlobalContext);
  // calls navbar visibility state from global context

  return (
    <div className='page-header__title'>
      <a href='#'>{children}</a>
      <span
        className={`material-symbols-outlined google-icon icon ${
          isNavBarVisible ? 'is-active' : ''
        }`}
        onClick={() => setIsNavBarVisible(!isNavBarVisible)}
        // handle click toggling navbar visibility state
      >
        chat
      </span>
    </div>
  );
};

export default PageHeader;

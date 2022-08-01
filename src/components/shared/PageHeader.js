import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <div className='page-header__title'>
      <a href='#'>{children}</a>
      <span className='material-symbols-outlined google-icon icon'>chat</span>
    </div>
  );
};

export default PageHeader;

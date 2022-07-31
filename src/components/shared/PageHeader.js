import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <div className='page-header__title'>
      <a href='#'>{children}</a>
    </div>
  );
};

export default PageHeader;

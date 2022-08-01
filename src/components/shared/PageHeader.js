import React from 'react';
import { GlobalContext } from '../../GlobalContext';

const PageHeader = ({ children }) => {
  // const global = React.useContext(GlobalContext);
  // console.log(global.peopleBar);
  return (
    <div className='page-header__title'>
      <a href='#'>{children}</a>
      <span className='material-symbols-outlined google-icon icon'>chat</span>
    </div>
  );
};

export default PageHeader;

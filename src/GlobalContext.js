import React from 'react';
import avatar from './assets/avatar.png';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const user = {
    firstName: 'Storm',
    lastName: 'Trooper',
    url: '@stormtrooper',
    avatar,
  };
  return (
    <GlobalContext.Provider value={user}>{children}</GlobalContext.Provider>
  );
};

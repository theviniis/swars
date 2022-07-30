import React from 'react';
import avatar from './assets/avatar.png';
import { useFetch } from './hooks/useFetch';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const people = useFetch('https://swapi.dev/api/people/');

  return (
    <GlobalContext.Provider value={{ user, people }}>
      {children}
    </GlobalContext.Provider>
  );
};

const user = {
  firstName: 'Storm',
  lastName: 'Trooper',
  url: '@stormtrooper',
  avatar,
};

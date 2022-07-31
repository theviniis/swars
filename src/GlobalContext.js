import React from 'react';
import avatar from './assets/avatar.png';
import { useFetch } from './hooks/useFetch';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const people = useFetch('https://swapi.dev/api/people/');
  const [posts, setPosts] = React.useState(postsList);

  return (
    <GlobalContext.Provider value={{ user, people, posts, setPosts }}>
      {children}
    </GlobalContext.Provider>
  );
};

const user = {
  name: 'Storm Trooper',
  url: '@stormtrooper',
  avatar,
};

const postsList = [
  {
    name: 'Storm Trooper',
    url: '@stormtrooper',
    avatar: avatar,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, esse. Possimus natus soluta temporibus amet.',
  },
  {
    name: 'Storm Trooper',
    url: '@stormtrooper',
    avatar: avatar,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, esse. Possimus natus soluta temporibus amet.',
  },
  {
    name: 'Storm Trooper',
    url: '@stormtrooper',
    avatar: avatar,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, esse. Possimus natus soluta temporibus amet.',
  },
  {
    name: 'Storm Trooper',
    url: '@stormtrooper',
    avatar: avatar,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, esse. Possimus natus soluta temporibus amet.',
  },
  {
    name: 'Storm Trooper',
    url: '@stormtrooper',
    avatar: avatar,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, esse. Possimus natus soluta temporibus amet.',
  },
];

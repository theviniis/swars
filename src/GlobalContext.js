import React from 'react';
import avatar from './assets/avatar.png';
import { useFetch } from './hooks/useFetch';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [posts, setPosts] = React.useState(postsList);
  const allData = useFetch(requestList);

  return (
    <GlobalContext.Provider value={{ user, posts, setPosts, allData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const requestList = [
  'https://swapi.dev/api/people/',
  'https://swapi.dev/api/planets/',
  'https://swapi.dev/api/species/',
];

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

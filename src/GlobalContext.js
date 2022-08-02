import React from 'react';
import avatar from './assets/avatar.png';
import useMedia from './hooks/useMedia';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [posts, setPosts] = React.useState(postsList);
  const mobile = useMedia('(max-width: 900px)');
  const [isNavBarVisible, setIsNavBarVisible] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        user,
        posts,
        setPosts,
        mobile,
        isNavBarVisible,
        setIsNavBarVisible,
      }}
    >
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

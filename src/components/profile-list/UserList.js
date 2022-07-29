import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Avatar from '../shared/Avatar';

const UserList = () => {
  const people = useFetch('https://swapi.dev/api/people/');

  return (
    <ul className='user-list'>
      {people.response
        ? people.response.results.map((person) => (
            <li key={person.name} className='user-list__item card'>
              <Avatar />
              {person.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default UserList;

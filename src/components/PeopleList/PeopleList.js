import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import PersonCard from './PersonCard';

const PeopleList = () => {
  const { data } = useGetAllData('https://swapi.dev/api/people');
  return (
    <ul>{data && data.map((person) => <PersonCard person={person} />)}</ul>
  );
};

export default PeopleList;

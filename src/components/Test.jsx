import React from 'react';
import { SimpleFetch } from '../hooks/SimpleFetch';

const Test = () => {
  const [people, setPeople] = React.useState([]);
  const { data } = SimpleFetch('https://swapi.dev/api/people/');
  console.log(data);
  return <div style={{ overflowY: 'scroll' }}></div>;
};

export default Test;

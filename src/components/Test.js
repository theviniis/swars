import React from 'react';
import { useFetch } from '../hooks/useFetch_v1';

const list = [
  { name: 'people', url: 'https://swapi.dev/api/people/' },
  { name: 'planets', url: 'https://swapi.dev/api/planets/' },
  { name: 'species', url: 'https://swapi.dev/api/species/' },
];

const Test = () => {
  const data = useFetch(list);
  // console.log(data);
  return <div>Test</div>;
};

export default Test;

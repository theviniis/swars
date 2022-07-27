import React from 'react';
import { useFetch } from './hooks/useFetch';

function App() {
  const people = useFetch('https://swapi.dev/api/people/');
  const planets = useFetch('https://swapi.dev/api/planets/');
  const species = useFetch('https://swapi.dev/api/species/');

  return (
    <div className='App'>
      <ul>
        {people.response ? (
          people.response.results.map((people) => (
            <li key={people.name}>{people.name}</li>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </ul>

      <ul>
        {planets.response ? (
          planets.response.results.map((planet) => (
            <li key={planet.name}>{planet.name}</li>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </ul>

      <ul>
        {species.response ? (
          species.response.results.map((specie) => (
            <li key={specie.name}>{specie.name}</li>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </ul>
    </div>
  );
}

export default App;

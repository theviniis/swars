const planets = useFetch('https://swapi.dev/api/planets/');
const species = useFetch('https://swapi.dev/api/species/');

<div className='App'>
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
</div>;

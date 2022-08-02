import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';

const Worlds = () => {
  const { data } = useGetAllData('https://swapi.dev/api/planets/');

  return (
    <Page name='Worlds'>
      {data &&
        data.map((world) => (
          <AttrList
            key={world.name}
            data={[
              {
                name: 'name',
                url: world.name,
              },
              {
                name: 'climate',
                url: world.climate,
              },
              {
                name: 'created',
                url: world.created,
              },
              {
                name: 'homeworld',
                url: world.homeworld,
              },
              {
                name: 'diameter',
                url: world.diameter,
              },
              {
                name: 'edited',
                url: world.edited,
              },

              {
                name: 'gravity',
                url: world.gravity,
              },
              {
                name: 'orbital period',
                url: world.orbital_period,
              },
              {
                name: 'population',
                url: world.population,
              },

              {
                name: 'rotation period',
                url: world.rotation_period,
              },
              {
                name: 'surface water',
                url: world.surface_water,
              },
              {
                name: 'terrain',
                url: world.terrain,
              },
              {
                name: 'films',
                url: world.films,
              },
              {
                name: 'residents',
                url: world.residents,
              },
            ]}
          />
        ))}
    </Page>
  );
};

export default Worlds;

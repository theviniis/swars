import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';
import PageHeader from '../shared/PageHeader';

const Worlds = () => {
  const worlds = useFetch('https://swapi.dev/api/planets/');
  return (
    <Page name='Worlds'>
      <ul className='worlds__list'>
        {worlds.response
          ? worlds.response.results.map((item) => (
              <AttrList
                key={item.name}
                data={[
                  {
                    name: 'name',
                    url: item.name,
                  },
                  {
                    name: 'climate',
                    url: item.climate,
                  },
                  {
                    name: 'created',
                    url: item.created,
                  },
                  {
                    name: 'homeworld',
                    url: item.homeworld,
                  },
                  {
                    name: 'diameter',
                    url: item.diameter,
                  },
                  {
                    name: 'edited',
                    url: item.edited,
                  },

                  {
                    name: 'gravity',
                    url: item.gravity,
                  },
                  {
                    name: 'orbital period',
                    url: item.orbital_period,
                  },
                  {
                    name: 'population',
                    url: item.population,
                  },

                  {
                    name: 'rotation period',
                    url: item.rotation_period,
                  },
                  {
                    name: 'surface water',
                    url: item.surface_water,
                  },
                  {
                    name: 'terrain',
                    url: item.terrain,
                  },
                  {
                    name: 'films',
                    url: item.films,
                  },
                  {
                    name: 'residents',
                    url: item.residents,
                  },
                ]}
              />
            ))
          : null}
      </ul>
    </Page>
  );
};

export default Worlds;

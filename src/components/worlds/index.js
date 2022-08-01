import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';

const Worlds = () => {
  const global = React.useContext(GlobalContext);

  const worlds = global.allData[1] ? global.allData[1].data.results : [];

  return (
    <Page name='Worlds'>
      {worlds
        ? worlds.map((world) => (
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
          ))
        : null}
    </Page>
  );
};

export default Worlds;

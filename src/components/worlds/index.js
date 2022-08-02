import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import AttrList from '../shared/AttrList';
import Loading from '../shared/Loading';
import Page from '../shared/Page';

const Worlds = () => {
  const { data, isLoading } = useGetAllData('https://swapi.dev/api/planets/');
  //fetch data and loading state using custom hook

  return (
    <Page name='Worlds'>
      {data && !isLoading ? (
        <>
          {data &&
            data.map((world, index) => (
              //maps data rendering an AttrList component passing props
              <AttrList
                key={(world.name, index)}
                data={
                  // pass an array of object with the name and props for render an atributes list
                  [
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
                  ]
                }
              />
            ))}
        </>
      ) : (
        <Loading />
        // return loading component if the isLoading state is true
      )}
    </Page>
  );
};

export default Worlds;

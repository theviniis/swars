import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';

const Species = () => {
  const { data } = useGetAllData('https://swapi.dev/api/species/');

  return (
    <Page name='Species'>
      {data.map((specie) => (
        <AttrList
          key={specie.name}
          data={[
            {
              name: 'name',
              url: specie.name,
            },
            {
              name: 'average_height',
              url: specie.average_height,
            },
            {
              name: 'average_lifespan',
              url: specie.average_lifespan,
            },
            {
              name: 'classification',
              url: specie.classification,
            },
            {
              name: 'created',
              url: specie.created,
            },
            {
              name: 'designation',
              url: specie.designation,
            },

            {
              name: 'edited',
              url: specie.edited,
            },
            {
              name: 'eye_colors',
              url: specie.eye_colors,
            },
            {
              name: 'hair_colors',
              url: specie.hair_colors,
            },
            {
              name: 'homeworld',
              url: specie.homeworld,
            },
            {
              name: 'language',
              url: specie.language,
            },
            {
              name: 'skin_colors',
              url: specie.skin_colors,
            },
            {
              name: 'films',
              url: specie.films,
            },
            {
              name: 'people',
              url: specie.people,
            },
          ]}
        />
      ))}
    </Page>
  );
};

export default Species;

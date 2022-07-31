import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';

const Species = () => {
  const species = useFetch('https://swapi.dev/api/species/');

  return (
    <Page name='Species'>
      {species.response
        ? species.response.results.map((item) => (
            <AttrList
              key={item.name}
              data={[
                {
                  name: 'name',
                  url: item.name,
                },
                {
                  name: 'average_height',
                  url: item.average_height,
                },
                {
                  name: 'average_lifespan',
                  url: item.average_lifespan,
                },
                {
                  name: 'classification',
                  url: item.classification,
                },
                {
                  name: 'created',
                  url: item.created,
                },
                {
                  name: 'designation',
                  url: item.designation,
                },

                {
                  name: 'edited',
                  url: item.edited,
                },
                {
                  name: 'eye_colors',
                  url: item.eye_colors,
                },
                {
                  name: 'hair_colors',
                  url: item.hair_colors,
                },
                {
                  name: 'homeworld',
                  url: item.homeworld,
                },
                {
                  name: 'language',
                  url: item.language,
                },
                {
                  name: 'skin_colors',
                  url: item.skin_colors,
                },
                {
                  name: 'films',
                  url: item.films,
                },
                {
                  name: 'people',
                  url: item.people,
                },
              ]}
            />
          ))
        : null}
    </Page>
  );
};

export default Species;

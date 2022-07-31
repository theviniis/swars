import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import AttrList from '../shared/AttrList';
import Page from '../shared/Page';

const Species = () => {
  const species = useFetch('https://swapi.dev/api/species/');

  return (
    <Page name='Species'>
      <div className='species__list'>
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
                    name: 'films',
                    url: item.films,
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
                    name: 'people',
                    url: item.people,
                  },
                  {
                    name: 'skin_colors',
                    url: item.skin_colors,
                  },
                ]}
              />
            ))
          : null}
      </div>
    </Page>
  );
};

export default Species;

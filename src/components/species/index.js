import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import AttrList from '../shared/AttrList';
import Loading from '../shared/Loading';
import Page from '../shared/Page';

const Species = () => {
  const { data, isLoading } = useGetAllData('https://swapi.dev/api/species/');

  return (
    <Page name='Species'>
      {data && !isLoading ? (
        <>
          {data.map((specie, index) => (
            <AttrList
              key={(specie.name, index)}
              data={[
                {
                  name: 'name',
                  url: specie.name,
                },
                {
                  name: 'average height',
                  url: specie.average_height,
                },
                {
                  name: 'average lifespan',
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
                  name: 'hair colors',
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
                  name: 'skin colors',
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
        </>
      ) : (
        <Loading />
      )}
    </Page>
  );
};

export default Species;

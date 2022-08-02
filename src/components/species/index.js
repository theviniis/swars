import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import AttrList from '../shared/AttrList';
import Loading from '../shared/Loading';
import Page from '../shared/Page';

const Species = () => {
  const { data, isLoading } = useGetAllData('https://swapi.dev/api/species/');
  //fetch data and loading state using custom hook

  return (
    <Page name='Species'>
      {data && !isLoading ? (
        //maps data rendering an AttrList component passing props
        <>
          {data.map((specie, index) => (
            <AttrList
              key={(specie.name, index)}
              data={
                // pass an array of object with the name and props for render an atributes list
                [
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

export default Species;

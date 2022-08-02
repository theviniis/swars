import React from 'react';
import AttrList from '../shared/AttrList';
import useGetAllData from '../../hooks/useGetAllData';
import Loading from '../shared/Loading';

function List({ input }) {
  const { data, isLoading } = useGetAllData('https://swapi.dev/api/people');

  const filteredData = data.filter((li) => {
    if (input === '') {
      return li;
    } else {
      return li.name.toLowerCase().includes(input);
    }
  });

  return (
    <div className={'people'}>
      {data && !isLoading ? (
        filteredData.map((item, index) => (
          <AttrList
            key={(item.name, index)}
            avatar={true}
            data={[
              {
                name: 'name',
                url: item.name,
              },
              {
                name: 'birth_year',
                url: item.birth_year,
              },
              {
                name: 'created',
                url: item.created,
              },
              {
                name: 'edited',
                url: item.edited,
              },
              {
                name: 'eye_color',
                url: item.eye_color,
              },

              {
                name: 'gender',
                url: item.gender,
              },
              {
                name: 'hair_color',
                url: item.hair_color,
              },
              {
                name: 'height',
                url: item.height,
              },
              {
                name: 'homeworld',
                url: item.homeworld,
              },
              {
                name: 'mass',
                url: item.mass,
              },
              {
                name: 'skin_color',
                url: item.skin_color,
              },
              {
                name: 'films',
                url: item.films,
              },
              {
                name: 'species',
                url: item.species,
              },
              {
                name: 'starships',
                url: item.starships,
              },
              {
                name: 'vehicles',
                url: item.vehicles,
              },
            ]}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default List;

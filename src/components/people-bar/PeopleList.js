import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import AttrList from '../shared/AttrList';
import useGetAllData from '../../hooks/getAllData';

function List({ input }) {
  const { data } = useGetAllData('https://swapi.dev/api/people');

  const people = data ? data : [];

  return (
    <div className={`people ${global.isMobile ? 'mobile' : ''}`}>
      {people.map((item, index) => (
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
      ))}
    </div>
  );
}

export default List;

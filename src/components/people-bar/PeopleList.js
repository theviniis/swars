import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import AttrList from '../shared/AttrList';

function List({ input }) {
  const global = React.useContext(GlobalContext);

  const isNarrowScreen = window.matchMedia('(max-width: 900px)').matches;

  const people = global.allData[0] ? global.allData[0].data.results : [];

  const filteredData = people.filter((el) => {
    if (input === '') {
      return el;
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });

  return (
    <div className='people'>
      {people.map((item) => (
        <AttrList
          key={item.name}
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

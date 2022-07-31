import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import AttrList from '../shared/AttrList';

function List({ input }) {
  const global = React.useContext(GlobalContext);
  let data = global.people.response ? global.people.response.results : [];

  const filteredData = data.filter((el) => {
    if (input === '') {
      return el;
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });

  return (
    <div className='people'>
      {global.people.response
        ? global.people.response.results.map((item) => (
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
          ))
        : null}
    </div>
  );
}

export default List;

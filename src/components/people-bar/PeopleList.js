import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import PersonCard from './PersonCard';

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
    <ul className='people-list'>
      {filteredData.map((props) => (
        <li key={props.name} className='people-list__item'>
          <PersonCard
            className='people-list'
            birth_year={props.birth_year}
            created={props.created}
            edited={props.edited}
            eye_color={props.eye_color}
            films={props.films}
            gender={props.gender}
            hair_color={props.hair_color}
            height={props.height}
            homeworld={props.homeworld}
            mass={props.mass}
            name={props.name}
            skin_color={props.skin_color}
            species={props.species}
            starships={props.starships}
            vehicles={props.vehicles}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;

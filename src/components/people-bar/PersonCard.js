import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Avatar from '../shared/Avatar';

const PersonCard = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    return setIsActive(!isActive);
  };

  const homeworld = useFetch(props.homeworld);

  return (
    <div
      className={`person-card ${isActive ? 'is-active' : ''} ${
        props.className
      } `}
    >
      <div className='person-card__header' onClick={handleClick}>
        <div>
          <Avatar />
          <span>{props.name}</span>
        </div>
        <span className='material-icons icon'>expand_more</span>
      </div>

      <div className='person-card__content'>
        <div className='person'>
          <span className='person-att'>Birth Year: </span>
          <span className='person-att-desc'>{props.birth_year}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Gender: </span>
          <span className='person-att-desc'>{props.gender}</span>
        </div>

        <div className='person'>
          <span className='person-att'>Eye Color: </span>
          <span className='person-att-desc'>{props.eye_color}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Hair Color: </span>
          <span className='person-att-desc'>{props.hair_color}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Height: </span>
          <span className='person-att-desc'>{props.height}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Homeworld: </span>
          <span className='person-att-desc'>
            {homeworld.response ? homeworld.response.name : ''}
          </span>
        </div>
        <div className='person'>
          <span className='person-att'>Mass: </span>
          <span className='person-att-desc'>{props.mass}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Skin Color: </span>
          <span className='person-att-desc'>{props.skin_color}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Created: </span>
          <span className='person-att-desc'>{props.created}</span>
        </div>
        <div className='person'>
          <span className='person-att'>Edited: </span>
          <span className='person-att-desc'>{props.edited}</span>
        </div>
        <div className='person'>
          <details open>
            <summary className='person-att'>Films</summary>
            <>
              {console.log(props.films)}
              {props.films.map((film) => (
                <span className='person-att-desc'>{film}</span>
              ))}
            </>
          </details>
        </div>
        <div className='person'>
          <details open>
            <summary className='person-att'>Species</summary>
            {props.species.map((specie) => (
              <span className='person-att-desc'>{specie}</span>
            ))}
          </details>
        </div>
        <div className='person'>
          <details open>
            <summary className='person-att'>Vehicles</summary>
            {props.starships.map((starship) => (
              <span className='person-att-desc'>{starship}</span>
            ))}
          </details>
        </div>
        <div className='person'>
          <details open>
            <summary className='person-att'>Starships</summary>
            {props.vehicles.map((vehicle) => (
              <span className='person-att-desc'>{vehicle}</span>
            ))}
          </details>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;

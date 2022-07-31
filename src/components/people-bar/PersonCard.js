import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Avatar from '../shared/Avatar';

const PersonCard = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const homeworld = useFetch(props.homeworld);

  const data = [
    {
      name: 'Birth Year',
      url: props.birth_year,
    },
    {
      name: 'Gender',
      url: props.Gender,
    },
    {
      name: 'Eye Color',
      url: props.eye_color,
    },
    {
      name: 'Hair Color',
      url: props.hair_color,
    },
    {
      name: 'Height',
      url: props.height,
    },
    {
      name: 'Homeworld',
      url: homeworld.response ? homeworld.response.name : '',
    },
    {
      name: 'Mass',
      url: props.mass,
    },
    {
      name: 'Skin Color',
      url: props.skin_color,
    },
    {
      name: 'Created',
      url: props.created,
    },
    {
      name: 'Edited',
      url: props.edited,
    },
    {
      name: 'Films',
      url: props.films,
    },
    {
      name: 'Species',
      url: props.species,
    },
    {
      name: 'Vehicles',
      url: props.vehicles,
    },
    {
      name: 'Starships',
      url: props.starships,
    },
  ];

  return (
    <div
      className={`person-card ${isActive ? 'is-active' : ''} ${
        props.className
      } `}
    >
      <div
        className='person-card__header'
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <Avatar />
          <span>{props.name}</span>
        </div>
        <span className='material-icons icon'>expand_more</span>
      </div>

      <ul className='person-card__content'>
        <li>
          {data.map((att) => (
            <>
              {typeof att.url === 'string' ? (
                <div>
                  <span>{att.name}: </span>
                  <span>{att.url}</span>
                </div>
              ) : (
                <div>
                  <details open>
                    <summary className='att'>{att.name}</summary>
                    {att.url
                      ? att.url.map((item) => (
                          <div className='att-desc' key={item}>
                            {item}
                          </div>
                        ))
                      : null}
                  </details>
                </div>
              )}
            </>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default PersonCard;

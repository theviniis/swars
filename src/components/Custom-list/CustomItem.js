import React from 'react';
import Avatar from '../Shared/Avatar';
import CustomDetail from './CustomDetail';

const CustomItem = ({ person, avatar }) => {
  //receives an object with a person information and an avatar option
  const [isActive, setIsActive] = React.useState(false);

  return (
    //Returns a person card with extend/colapse a Header and a content part
    <li className={`custom__item ${isActive ? 'is-active' : ''}`}>
      <div
        className='custom__item__header'
        onClick={() => setIsActive(!isActive)}
      >
        {avatar ? <Avatar /> : null}
        <span>{person.name}</span>
        <span className='material-symbols-outlined icon'>expand_more</span>
      </div>
      {isActive ? (
        <ul className='custom__item__content'>
          {
            //Iterates the array generating person attr list
            Object.keys(person).map((attr) => (
              <li key={attr}>
                {typeof person[attr] === 'string' ? (
                  // verify if the url type equals string to generate a div tag
                  <dl key={attr}>
                    <dl className='attr'>{attr.replace('_', ' ')}:</dl>
                    <dd className='attr-desc'>{person[attr]}</dd>
                  </dl>
                ) : (
                  <CustomDetail person={person} attr={attr} key={attr} />
                  // if isnt a string, generates a details tag passing person object and attr
                )}
              </li>
            ))
          }
        </ul>
      ) : null}
    </li>
  );
};

export default CustomItem;

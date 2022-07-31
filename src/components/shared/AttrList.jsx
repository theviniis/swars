import React from 'react';
import Avatar from './Avatar';

const AttrList = ({ data, avatar }) => {
  //Receives an [{ name, url}] array
  const [isActive, setIsActive] = React.useState(false);

  // Toggle Handler
  const handleToggle = (e) => {
    e.preventDefault();
    return setIsActive(!isActive);
  };

  return (
    //Returns a person card with extend/colapse a Header and a content part
    <div className={`attr-card ${isActive ? 'is-active' : ''}`}>
      {/* card header */}
      <div className='attr-card__header' onClick={handleToggle}>
        {avatar ? <Avatar /> : null}
        <span>{data[0].url}</span>
        <span className='material-icons icon'>expand_more</span>
      </div>
      {/* card content */}
      <ul className='attr-card__content'>
        {data.map((item) => (
          // iterates he array generating the atribute list
          <li key={item.name} className='list__item'>
            {typeof item.url === 'string' ? (
              // verify if the url type equals string to generate a div tag
              <div>
                <span className='att'>{item.name}: </span>
                <span className='att-desc'>{item.url}</span>
              </div>
            ) : (
              // if isnt a string, generates a details tag
              <details>
                <summary className='att'>{item.name}: </summary>
                {item.url}
              </details>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttrList;

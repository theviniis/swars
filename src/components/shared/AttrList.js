import React from 'react';
import Avatar from './Avatar';
import Details from './Details';

const AttrList = ({ data, avatar }) => {
  //Receives an [{ name, url}] array
  const [isActive, setIsActive] = React.useState(false);
  // defines state to expand the atributes card

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
        <span className='material-symbols-outlined'>expand_more</span>
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
              // if isnt a string, generates a details tag passing an array of urls
              <Details name={item.name} url={item.url} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttrList;

import React from 'react';
import Avatar from './Avatar';

const AttrList = ({ data, avatar }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className={`attr-card ${isActive ? 'is-active' : ''}`}>
      <div className='attr-card__header' onClick={() => setIsActive(!isActive)}>
        {avatar ? <Avatar /> : null}
        <span>{data[0].url}</span>
        <span className='material-icons icon'>expand_more</span>
      </div>
      <ul className='attr-card__list'>
        {data.map((item) => (
          <>
            {typeof item.url === 'string' ? (
              <li className='list__item'>
                <span className='att'>{item.name}: </span>
                <span className='att-desc'>{item.url}</span>
              </li>
            ) : (
              <details open className='list__item'>
                <summary className='att'>{item.name}: </summary>
                {item.url
                  ? item.url.map((item) => (
                      <div className='att-desc' key={item}>
                        {item}
                      </div>
                    ))
                  : null}
              </details>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default AttrList;

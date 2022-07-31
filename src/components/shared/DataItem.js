import React from 'react';

const DataItem = (props) => {
  return (
    <li className='worlds__list__item card'>
      {props.data.map((att) => (
        <>
          {typeof att.url === 'string' ? (
            <div className='world__card' key={att.name}>
              <span className='att'>{att.name}: </span>
              <span className='att-desc'>{att.url}</span>
            </div>
          ) : (
            <div className='world__card' key={att.name}>
              <details open>
                <summary className='att'>{att.name}</summary>
                {att.url.map((item) => (
                  <div className='att-desc' key={item}>
                    {item}
                  </div>
                ))}
              </details>
            </div>
          )}
        </>
      ))}
    </li>
  );
};

export default DataItem;

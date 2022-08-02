import React from 'react';
import axios from 'axios';

const Details = ({ name, url }) => {
  // recives an name for summary tag and an url with urls
  const [data, setData] = React.useState([]);
  // data states

  React.useMemo(() => {
    // calls memo to run function once
    const fetchData = () => {
      url &&
        axios
          .all(url.map((item) => axios.get(item)))
          .then((data) => setData(data));
      // use axios to fetch each url and spread data in data state
    };
    fetchData();
  }, [url]);

  return (
    <details>
      <summary className='att'>{name}: </summary>
      {data &&
        data.map((item) => (
          // for each data render a span with the props
          <span key={item.data.name ? item.data.name : item.data.title}>
            {item.data.name ? item.data.name : item.data.title}
          </span>
        ))}
    </details>
  );
};

export default React.memo(Details);

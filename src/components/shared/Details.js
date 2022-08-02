import React from 'react';
import axios from 'axios';

const Details = ({ name, url }) => {
  const [allData, setAllData] = React.useState([]);

  React.useMemo(() => {
    const fetchData = () => {
      url &&
        axios
          .all(url.map((item) => axios.get(item)))
          .then((data) => setAllData(data));
    };

    fetchData();
  }, [url]);

  return (
    <details>
      <summary className='att'>{name}: </summary>
      {allData &&
        allData.map((item) => (
          <span key={item.data.name ? item.data.name : item.data.title}>
            {item.data.name ? item.data.name : item.data.title}
          </span>
        ))}
    </details>
  );
};

export default Details;

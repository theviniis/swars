import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import axios from 'axios';

const Details = ({ name, url }) => {
  const [allData, setAllData] = React.useState([]);

  const data = url ? url : [];
  const fetchData = () => {
    axios
      .all(data.map((item) => axios.get(item)))
      .then((data) => setAllData(data));
  };

  React.useEffect(() => {
    // fetchData();
  }, []);

  return (
    <details>
      <summary className='att'>{name}: </summary>
      {allData.map((item) => (
        <span key={item.data.name ? item.data.name : item.data.title}>
          {item.data.name ? item.data.name : item.data.title}
        </span>
      ))}
    </details>
  );
};

export default Details;

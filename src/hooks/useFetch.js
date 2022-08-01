import axios from 'axios';
import React from 'react';

export const useFetch = (requestList) => {
  const [allData, setAllData] = React.useState([]);

  const fetchData = (list) => {
    axios
      .all(list.map((item) => axios.get(item)))
      .then((data) => setAllData(data));
  };

  React.useEffect(() => {
    fetchData(requestList);
  }, [requestList]);

  return allData;
};

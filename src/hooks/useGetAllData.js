import React from 'react';

const useGetAllData = (requestUrl) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    // setData((currentList) => [...currentList, ...json.results]);
    console.log(json.next);
    if (json.next) {
      fetchData(json.next);
    }
  };
  React.useEffect(() => {
    fetchData(requestUrl);
  }, []);

  return { data, error };
};

export default useGetAllData;

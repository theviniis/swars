import React from 'react';

const useGetAllData = (requestUrl) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      if (json.next) {
        fetchData(json.next);
        setData((currentList) => [...currentList, ...json.results]);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(requestUrl);
  }, []);

  return { data, error, loading };
};

export default useGetAllData;

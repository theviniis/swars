import React from 'react';

const useGetAllData = (requestUrl) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useMemo(() => {
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData((currentList) => [...currentList, ...json.results]);
        if (json.next) {
          fetchData(json.next);
        }
      } catch (err) {
        setError(err);
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData(requestUrl);
  }, [requestUrl]);
  return { data, error, loading };
};

export default useGetAllData;

import React from 'react';

export const SimpleFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [next, setNext] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
      setNext(json.next);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(url);
  }, []);

  return { data, next, error, loading };
};

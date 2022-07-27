import React from 'react';

export const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { response, error, loading };
};

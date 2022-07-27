import React from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
        throw new Error(err);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

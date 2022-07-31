import React from 'react';

export const useFetch = (list, options) => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setResponse((currentList) => [...currentList, json]);
      } catch (err) {
        setError(err);
        throw new Error(err);
      } finally {
        setLoading(false);
      }
    };
    // console.log(list);
    list.forEach((item) => fetchData(item.url));
    // list.forEach((item) => fetchData(item));
    // list.url.forEach((item) => fetchData(item));
  }, [list, options]);
  return { response, error, loading: loading };
};

import React from 'react';

const useGetAllData = (requestUrl) => {
  const [data, setData] = React.useState([]);
  const [hasError, setHasError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useMemo(() => {
    const fetchData = async (url) => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const json = await res.json();
        setData((currentList) => [...currentList, ...json.results]);
        if (json.next) fetchData(json.next);
      } catch (err) {
        setHasError(err);
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(requestUrl);
  }, [requestUrl]);
  return { data, hasError, isLoading };
};

export default useGetAllData;

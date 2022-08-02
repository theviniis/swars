import React from 'react';

const useGetAllData = (request, options) => {
  //receives a request and option to fetch data
  const [data, setData] = React.useState([]);
  const [hasError, setHasError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useMemo(() => {
    const fetchData = async (url) => {
      try {
        setIsLoading(true);
        //set loading state true
        const res = await fetch(url, options);
        const json = await res.json();
        //fetch things and applies .json() method
        setData((currentList) => [...currentList, ...json.results]);
        //spread current list and results in data state
        if (json.next) fetchData(json.next);
        //checks if there is a json.next, if is, fetch the data again until return null
      } catch (err) {
        setHasError(err);
        //set error state if error
        throw new Error(err);
      } finally {
        setIsLoading(false);
        //set loading state to false
      }
    };

    fetchData(request);
    //calls the function passint the request
  }, [request, options]);
  return { data, hasError, isLoading };
};

export default useGetAllData;

import React from 'react';
import useGetAllData from '../../hooks/useGetAllData';
import Loading from '../Shared/Loading';
import CustomItem from './CustomItem';

const CustomList = ({ avatar, className, url, input = '' }) => {
  const { data, isLoading } = useGetAllData(url);
  //fetch data and loading state using custom hook

  const filteredData = data.filter((li) => {
    //function the returns results that matches search-bar input value
    if (input === '') {
      return li;
    } else {
      return li.name.toLowerCase().includes(input);
    }
  });

  return (
    <ul className={`${className ? className : ''}__custom__list`}>
      {data && !isLoading ? (
        <>
          {data &&
            filteredData.map((person, index) => (
              //maps data rendering an CustomItem component passing props
              <CustomItem
                person={person}
                key={(person, index)}
                avatar={avatar}
              />
            ))}
        </>
      ) : (
        <Loading />
        // return loading component if the isLoading state is true
      )}
    </ul>
  );
};

export default CustomList;

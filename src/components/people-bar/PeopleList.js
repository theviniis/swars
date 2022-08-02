import React from 'react';
import AttrList from '../shared/AttrList';
import useGetAllData from '../../hooks/useGetAllData';
import Loading from '../shared/Loading';

function List({ input }) {
  const { data, isLoading } = useGetAllData('https://swapi.dev/api/people');
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
    <div className={'people'}>
      {data && !isLoading ? (
        filteredData.map((item, index) => (
          // return results from filteredData function
          <AttrList
            key={(item.name, index)}
            avatar={true}
            data={
              // pass an array of object with the name and props for render an atributes list
              [
                {
                  name: 'name',
                  url: item.name,
                },
                {
                  name: 'gender',
                  url: item.gender,
                },
                {
                  name: 'birth year',
                  url: item.birth_year,
                },
                {
                  name: 'eye color',
                  url: item.eye_color,
                },
                {
                  name: 'hair color',
                  url: item.hair_color,
                },
                {
                  name: 'height',
                  url: item.height,
                },
                {
                  name: 'created',
                  url: item.created,
                },
                {
                  name: 'edited',
                  url: item.edited,
                },
                {
                  name: 'homeworld',
                  url: item.homeworld,
                },
                {
                  name: 'mass',
                  url: item.mass,
                },
                {
                  name: 'skin color',
                  url: item.skin_color,
                },
                {
                  name: 'films',
                  url: item.films,
                },
                {
                  name: 'species',
                  url: item.species,
                },
                {
                  name: 'starships',
                  url: item.starships,
                },
                {
                  name: 'vehicles',
                  url: item.vehicles,
                },
              ]
            }
          />
        ))
      ) : (
        <Loading />
        // return loading component if the isLoading state is true
      )}
    </div>
  );
}

export default List;

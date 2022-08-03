import React from 'react';
import CustomList from './Custom-list/CustomList';
import Page from './Shared/Page';

const Species = () => {
  const url = 'https://swapi.dev/api/species/';
  //fetch data and loading state using custom hook

  return (
    <Page name='Species'>
      <CustomList url={url} className='species' />
    </Page>
  );
};

export default Species;

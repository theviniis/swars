import React from 'react';
import CustomList from './Custom-list/CustomList';
import Page from './Shared/Page';

const Worlds = () => {
  const url = 'https://swapi.dev/api/planets/';
  return (
    <Page name='Worlds'>
      <CustomList url={url} className='worlds' />
    </Page>
  );
};

export default Worlds;

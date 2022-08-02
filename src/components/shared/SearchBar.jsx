import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchBar = ({ setInputText }) => {
  return (
    <label htmlFor='search-bar' className='search-bar'>
      <SearchIcon />
      <input
        id='search-bar'
        type='search'
        placeholder='Search for someone'
        onChange={(e) => setInputText(e.target.value)}
        // change inputText state onChange
      />
    </label>
  );
};

export default SearchBar;

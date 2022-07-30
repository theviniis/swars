import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchBar = ({ inputText, setInputText }) => {
  return (
    <label htmlFor='search-bar' className='search-bar'>
      <SearchIcon />
      <input
        id='search-bar'
        type='search'
        placeholder='Procure por alguém'
        onChange={(e) => setInputText(e.target.value)}
      />
    </label>
  );
};

export default SearchBar;

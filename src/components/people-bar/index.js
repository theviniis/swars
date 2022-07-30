import React from 'react';
import SearchBar from '../shared/SearchBar';
import PeopleList from './PeopleList';

const PeopleBar = () => {
  const [inputText, setInputText] = React.useState('');
  return (
    <div className='people-bar'>
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <PeopleList input={inputText} />
    </div>
  );
};

export default PeopleBar;

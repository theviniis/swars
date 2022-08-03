import React from 'react';
import { GlobalContext } from '../GlobalContext';
import CustomList from './Custom-list/CustomList';
import SearchBar from './Shared/SearchBar';

const PeopleBar = () => {
  const [inputText, setInputText] = React.useState('');
  //input state for search-bar
  const { mobile, isNavBarVisible } = React.useContext(GlobalContext);
  //cals mobile state and nav-bar visibility state from global context
  const url = 'https://swapi.dev/api/people';
  //fetch data and loading state using custom hook

  return (
    <div
      className={`people-bar ${mobile ? 'mobile' : ''} ${
        isNavBarVisible ? 'is-active' : ''
      }`}
    >
      <SearchBar
        className='people'
        inputText={inputText}
        setInputText={setInputText}
      />
      <CustomList url={url} input={inputText} className='people-bar' avatar />
      {/* calls both components passing inputText state for filtering data */}
    </div>
  );
};

export default PeopleBar;

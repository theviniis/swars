import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import SearchBar from '../shared/SearchBar';
import PeopleList from './PeopleList';

const PeopleBar = () => {
  const [inputText, setInputText] = React.useState('');
  //input state for search-bar
  const { mobile, isNavBarVisible } = React.useContext(GlobalContext);
  //cals mobile state and nav-bar visibility state from global context
  return (
    <div
      className={`people-bar ${mobile ? 'mobile' : ''} ${
        isNavBarVisible ? 'is-active' : ''
      }`}
    >
      <div>
        <SearchBar inputText={inputText} setInputText={setInputText} />
        <PeopleList input={inputText} />
        {/* calls both components passing inputText state for filtering data */}
      </div>
    </div>
  );
};

export default PeopleBar;

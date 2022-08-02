import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import SearchBar from '../shared/SearchBar';
import PeopleList from './PeopleList';

const PeopleBar = () => {
  const [inputText, setInputText] = React.useState('');
  const { mobile } = React.useContext(GlobalContext);
  const { isNavBarVisible } = React.useContext(GlobalContext);
  return (
    <div
      className={`people-bar ${mobile ? 'mobile' : ''} ${
        isNavBarVisible ? 'is-active' : ''
      }`}
    >
      <SearchBar inputText={inputText} setInputText={setInputText} />
      <PeopleList input={inputText} />
    </div>
  );
};

export default PeopleBar;

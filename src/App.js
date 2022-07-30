import React from 'react';
import NavBar from './components/NavBar';
import Feed from './components/feed';
import './styles/application.scss';
import PeopleBar from './components/people-bar';

function App() {
  return (
    <div className='app grid-wrapper'>
      <NavBar />
      <Feed />
      <PeopleBar />
    </div>
  );
}

export default App;

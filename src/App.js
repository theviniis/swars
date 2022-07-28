import React from 'react';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import ProfileList from './components/ProfileList';
import './styles/application.scss';

function App() {
  return (
    <div className='app grid-wrapper'>
      <NavBar />
      <Feed />
      <ProfileList />
    </div>
  );
}

export default App;

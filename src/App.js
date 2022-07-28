import React from 'react';
import NavBar from './components/NavBar';
import Feed from './components/feed';
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

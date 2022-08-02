import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Feed from './components/feed';
import './styles/application.scss';
import PeopleBar from './components/people-bar';
import Worlds from './components/worlds';
import Species from './components/species';

function App() {
  return (
    <BrowserRouter>
      <div className='app grid-wrapper'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='worlds' element={<Worlds />} />
          <Route path='species' element={<Species />} />
        </Routes>
        <PeopleBar />
      </div>
    </BrowserRouter>
  );
}

export default App;

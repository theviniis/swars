import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Feed from './components/Feed/Feed';
import './styles/application.scss';
import PeopleBar from './components/PeopleBar';
import Worlds from './components/Worlds';
import Species from './components/Species';

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

import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import CharacterDetails from './Pages/Character Details/CharacterDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/details/:id' element={<CharacterDetails />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

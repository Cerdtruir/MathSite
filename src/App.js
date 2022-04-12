import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import './index.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

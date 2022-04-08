import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './index.css';
import Nav from './Nav';
import App from './App';
import Home from './Home';
import Quote from './Quote';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

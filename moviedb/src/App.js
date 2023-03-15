import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./App.css"
import { Link } from 'react-router-dom';
import { useState } from "react";
import MovieCard from './components/MovieCard';
import InfoMovie from './components/InfoMovie';


function App() {
  const [search, setsearch] = useState("")
  let inputsearch = (e) => {
    return setsearch(e.target.value)
  }
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo-container">
              <Link to="/" className="logo">
                Net Movies
              </Link>
            </div>
            <div className="search-container">
              <input type="text" onChange={inputsearch} placeholder="Search" className="search-input" />
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<MovieCard inputsearch={inputsearch} search={search} />} />
          <Route path='/Movies/:id' element={<InfoMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

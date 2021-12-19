import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie.js'
import Tv from './pages/Tv.js'
import Search from './pages/Search.js'
import Article from './pages/Article'
import Menu from './Components/Menu.js'

function App() {
  return (
    <div className="App">

      <Router basename="/study2">
        <Menu />
    
        <Routes>
         <Route path="/" element={<Movie />} />
         <Route path="/tv" element={<Tv />} />
         <Route path="/search" element={<Search />} />
         <Route path="/article" element={<Article />} />
        </Routes>
      </Router>

    </div>
  );
}


export default App;

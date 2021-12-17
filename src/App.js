import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'
import Tv from './Tv.js'
import Search from './Search.js'
import Article from './Article'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Router>
        <MenuContainer className="Menu-Container">

        <Link to='/'>
        <Title className='Menu' > Movie </Title>
        </Link>
        <Link to='tv'>
        <Title className='Menu'> Tv </Title>
        </Link>
        <Link to='search'>
        <Title className='Menu'> Search </Title>
        </Link>

        </MenuContainer>
        
        <Routes>
         <Route path="/" element={<Movie />} />
         <Route path="/tv" element={<Tv />} />
         <Route path="/search" element={<Search />} />
         <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

const MenuContainer = styled.div`
  displey: flex;
  
`

const Title = styled.div`
  color: #FFF;
  display: inline-block;
  margin: 20px;
  :hover{
    color: #FF0000;
    cursor: pointer;
  }
  

`

export default App;

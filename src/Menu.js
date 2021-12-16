import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './Movie.js'
import Tv from './Tv.js'
import Search from './Search.js'

function Menu() {
        return (
            <div>

            <MenuContainer className="Menu-Container">


            <Title className='Menu' > Movie </Title>
            <Title className='Menu'> Tv </Title>
            <Title className='Menu'> Search </Title>

            </MenuContainer>

            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/search">Invoices</Link> |{" "}
        <Link to="/">Expenses</Link>
      </nav>
            </div>
            
        )
    
}


const MenuContainer = styled.div`
  displey: flex;
  
`

const Title = styled.div`
  color: #FFF;
  float: left;
  margin: 0 30px 0 0;
  :hover{
    color: #FF0000;
    cursor: pointer;
  }
  

`

export default Menu;
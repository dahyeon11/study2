import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Movie from '../pages/Movie.js'
import Tv from '../pages/Tv.js'
import Search from '../pages/Search.js'

function Menu() {
        return (
            <div>

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
              <div></div>
            </div>
            
        )
    
}


const MenuContainer = styled.div`
  displey: flex;
  
`

const Title = styled.div`
  color: #FFF;
  display: inline-block;
  font-size: 32px;
  margin: 20px;
  :hover{
    color: #FF0000;
    cursor: pointer;
  }
  

`

export default Menu;
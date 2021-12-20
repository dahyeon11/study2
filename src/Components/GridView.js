import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import erroricon from '../warning.png';

function GridView({ title, data, currentPage }) {

    return (
        <div>
            <SectionTitle>{title}</SectionTitle>
            <TvContainer>
            {data.map((elements, index) => {
                return ([                    
                    <Link to='/Article' state={{ from: {elements}, currentPage: {currentPage}}} key={`${currentPage}-popular-link-${index}`}>
                    <ThumnailContainer className={`${currentPage}-thumbnail-container-${index}`} key={`${currentPage}-popular-container-${index}`}>
                    <Thumbnail className={`${currentPage}-thumbnail-${index}`} img={elements['poster_path'] ? `https://image.tmdb.org/t/p/w500/${elements['poster_path']}` : erroricon } key={`${currentPage}-datapopular${index}`}></Thumbnail>
                    <Star className='star' key={`${currentPage}-popular-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                    </ThumnailContainer>
                    </Link>
                ])
            })}
            </TvContainer>
        </div>
    )
}

const SectionTitle = styled.div`
    font-size: 32px;
    font-weight: 700;
    color: #FFF;
    display: flex;
    margin: 10px 0 5px 20px;
    position: relative;
`

const TvContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Star = styled.span`
    position: relative;
    color: #FFF;
    left: 62%;
    top: -45px;
    font-size: 16px;
    opacity: 0;
    width: 50px;
    margin: 0 0 0 0;

`
const ThumnailContainer = styled.div`
    display: flex;
    flex-direction: column;

    &:hover ${Star}{
        opacity: 1;
    }
`
const Thumbnail = styled.img.attrs((props) => ({
    src: props.img || 'https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg'
}))`
    width: 200px;
    height: 300px;
    margin: 10px;

    &:hover {
        opacity: 0.3;
    }
    background-color: #000;
    transition: opacity 0.3s ease-in-out 0s;  
`

export default GridView
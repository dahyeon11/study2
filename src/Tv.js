import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import getdata from './getdata.js'

function Tv() {

    const [tvDataPopular, setTvDataPopular] = useState([])
    const [tvDataTopRated, setTvDataTopRated] = useState([])
    const [tvDataNowPlaying, setTvDataNowPlaying] = useState([])

    useEffect(() => {
        let completed = false;
        getdata('get', '/tv/popular').then(result => {
            console.log(result)
            setTvDataPopular(result.data.results)
        })

        getdata('get', '/tv/top_rated').then(result => {
            console.log(result)
            setTvDataTopRated(result.data.results)
        })

        getdata('get', '/tv/airing_today').then(result => {
            console.log(result)
            setTvDataNowPlaying(result.data.results)
        })

    }, [])


    console.log('무비데이터는', tvDataPopular.length)

    return (
        <div>
            
            <SectionTitle>Popular</SectionTitle>
            <TvContainer>
            {tvDataPopular.map((elements, index) => {
                return ([
                    <Link to='/Article' state={{ from: {elements}, currentPage: 'tv'}} key={`tv-popular-link-${index}`}>
                    <ThumnailContainer className={`tv-thumbnail-container-${index}`} key={`tv-popular-container-${index}`}>
                    <Thumbnail className={`tvthumbnail-${index}`} img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`tvDataPopular${index}`}></Thumbnail>
                    <Star className='star' key={`tv-popular-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                    </ThumnailContainer>
                    </Link>
                ])
            })}
            </TvContainer>
            
            <SectionTitle>Top Rated</SectionTitle>
            <TvContainer>
            {tvDataTopRated.map((elements, index) => {
                return ([
                    <Link to='/Article' state={{ from: {elements} }} key={`tv-toprated-link-${index}`}>
                    <ThumnailContainer className={`tv-thumbnail-container-${index}`} key={`tv-Popular-container-${index}`}>
                    <Thumbnail img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`tvDataTopRelated${index}`}></Thumbnail>
                    <Star className='star' key={`tv-toprated-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                    </ThumnailContainer>
                    </Link>
                ])
            })}
            </TvContainer>

            <SectionTitle>Airing Today</SectionTitle>
            <TvContainer>
            {tvDataNowPlaying.map((elements, index) => {
                return ([
                    <Link to='/Article' state={{ from: {elements} }} key={`tv-nowplaying-link-${index}`}>
                    <ThumnailContainer className={`tv-thumbnail-container-${index}`} key={`tv-nowplaying-container-${index}`}>
                    <Thumbnail img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`tvDataNowPlaying${index}`}></Thumbnail>
                    <Star className='star' key={`tv-nowplaying-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
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


export default Tv
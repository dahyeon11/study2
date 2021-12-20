import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getdata from '../Components/getdata.js'

function Movie() {

    const [movieDataPopular, setMovieDataPopular] = useState([])
    const [movieDataTopRated, setMovieDataTopRated] = useState([])
    const [movieDataNowPlaying, setMovieDataNowPlaying] = useState([])

    useEffect(() => {
        getdata('get', '/movie/popular').then(result => {
            console.log(result)
            setMovieDataPopular(result.data.results)
        })

        getdata('get', '/movie/top_rated').then(result => {
            console.log(result)
            setMovieDataTopRated(result.data.results)
        })

        getdata('get', '/movie/now_playing').then(result => {
            console.log(result)
            setMovieDataNowPlaying(result.data.results)
        })

    }, [])


    console.log('무비데이터는', movieDataPopular.length)

    return (
        <div>
            <SectionTitle>Popular</SectionTitle>
            <MovieContainer>
            {movieDataPopular.map((elements, index) => {
                return ([
                    <Link to='/Article' state={{ from: {elements}, currentPage: 'movie'}} key={`movie-popular-link-${index}`}>
                    <ThumnailContainer className={`movie-thumbnail-container-${index}`} key={`movie-popular-container-${index}`}>
                    <Thumbnail className={`movie-thumbnail-${index}`} img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`movie-data-popular-${index}`}></Thumbnail>
                    <Star className='star' key={`movie-popular-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                    </ThumnailContainer>
                    </Link>
                ])
            })}
            </MovieContainer>
            
            <SectionTitle>Top Rated</SectionTitle>
            <MovieContainer>
            {movieDataTopRated.map((elements, index) => {
                return ([
                <Link to='/Article' state={{ from: {elements} }} key={`movie-toprated-link-${index}`}>
                <ThumnailContainer className={`movie-thumbnail-container-${index}`} key={`movie-Popular-container-${index}`}>
                <Thumbnail img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`movie-data-toprelated${index}`}></Thumbnail>
                <Star className='star' key={`movie-toprated-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                </ThumnailContainer>
                </Link>
])
            })}
            </MovieContainer>

            <SectionTitle>Now Playing</SectionTitle>
            <MovieContainer>
            {movieDataNowPlaying.map((elements, index) => {
                return ([
                    <Link to='/Article' state={{ from: {elements} }} key={`movie-nowplaying-link-${index}`}>
                    <ThumnailContainer className={`movie-thumbnail-container-${index}`} key={`movie-nowplaying-container-${index}`}>
                    <Thumbnail img={`https://image.tmdb.org/t/p/w500/${elements['poster_path']}`} key={`movie-data-dowplaying${index}`}></Thumbnail>
                    <Star className='star' key={`movie-nowplaying-star-${index}`}>{`☆${elements['vote_average']}/10`}</Star>
                    </ThumnailContainer>
                    </Link>
                ])
            })}
            </MovieContainer>
            
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

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

`
const Star = styled.span`
    position: relative;
    left: 62%;
    top: -12%;
    font-size: 16px;
    opacity: 0;
    :hover{
        opacity: 0;
    }
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

export default Movie
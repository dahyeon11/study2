import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import getdata from '../Components/getdata.js'

function Article() {
    const location = useLocation();

    const { from, currentPage } = location.state

    const [currentArticle, setCurrentArticle] = useState([])
    const [genre, setGenre] = useState([])


    useEffect(() => {
        getdata('get', `/${currentPage}/${from.elements['id']}`).then(result => {
            console.log('article 정보는 ', result.data)
            setCurrentArticle(result.data)
            setGenre(result.data.genres)
        })

    }, [])

    let date = ''
    let runtime = 0;
    if (currentPage === 'tv'){
        date = from.elements['first_air_date'].slice(0,4)
    } else {
        date = from.elements['release_date'].slice(0,4)
    }

    if (currentPage === 'tv'){
        runtime = currentArticle['episode_run_time']
    } else {
        runtime = currentArticle['runtime']
    }

    console.log(genre)

    console.log('from은 ', from.elements)

    console.log('article 정보는 ', currentArticle)

    return (
        <div>
            <MasterContainer>
            <BackgroundImg img={`https://image.tmdb.org/t/p/w500/${from.elements['backdrop_path']}`} />
            <Poster img={`https://image.tmdb.org/t/p/w500/${from.elements['poster_path']}`}></Poster>

            <DescriptionContainer>
            <DescriptionTitle>{currentPage === 'tv' ? from.elements['name'] : currentArticle['title']}</DescriptionTitle>
            <DescriptionHeader>
            {`${date}🔵${runtime}분🔵`}
            {genre.map((elements, index) => {
                return <Genre key={index}>{elements['name']}</Genre>
            })}
            <div>
            <Lang>{from.elements['origin_country']}</Lang>
            </div>
            </DescriptionHeader>
            <Description>{from.elements['overview']}</Description>
            <AContainer>
            <Ahref>Companies</Ahref>
            <Ahref>Countries</Ahref>
            <Ahref>Videos</Ahref>
            </AContainer>
            </DescriptionContainer>
            
            </MasterContainer>
        </div>
    )
}

export default Article;

const Background = styled.div`

`

const MasterContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`
const BackgroundImg = styled.div`
background-image: url(${props => (props.img)});
background-size: cover;
background-color: #FF0000;
opacity: 0.2;
position: absolute;
left: 0px;
top: 85px;
right: 0px;
bottom: 0px;
`


const Poster = styled.img.attrs((props) => ({
    src: props.img || 'https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg'
}))`
    all: initial;
    width: 30%;
    height: 80%;
    margin: 2%;

`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const DescriptionTitle = styled.div`
    font-size: 36px;
    font-weight: 500;
    margin: 40px 0 30px 0;

`

const DescriptionHeader = styled.div`
    font-size: 18px;
    font-weight: 300;
`

const Genre = styled.span`
    font-size: 18px;
    font-weight: 300;
    background-color: #FFB909;
    border-radius: 3px;
    margin: 0 10px 0 0;
`

const Lang = styled.div`
    display: relative;
    font-size: 18px;
    font-weight: 300;
    background-color: #333333;
    border-radius: 5px;
    
    width: 40px;
`

const Description = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: 300;

`
const AContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const Ahref = styled.a`
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    margin: 10px;
`
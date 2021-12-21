import React, { useState, useEffect } from 'react'
import getdata from '../Components/getdata.js'
import GridView from '../Components/GridView.js'
import validationTest from '../Components/validationTest.js'

function Movie() {

    const [movieDataPopular, setMovieDataPopular] = useState([])
    const [movieDataTopRated, setMovieDataTopRated] = useState([])
    const [movieDataNowPlaying, setMovieDataNowPlaying] = useState([])

    useEffect(() => {
        getdata('get', '/movie/popular').then(result => {
            console.log(result)
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setMovieDataPopular(gridData)
        })

        getdata('get', '/movie/top_rated').then(result => {
            console.log(result)
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setMovieDataTopRated(gridData)
        })

        getdata('get', '/movie/now_playing').then(result => {
            console.log(result)
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setMovieDataNowPlaying(gridData)
        })

    }, [])

    return (
        <div>
            <GridView title='Now Popular' data={movieDataPopular} currentPage='movie' />
            <GridView title='Top Rated' data={movieDataTopRated} currentPage='movie' />
            <GridView title='Now Playing' data={movieDataNowPlaying} currentPage='movie' />       
        </div>
    )
}

export default Movie
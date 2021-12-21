import React, { useState, useEffect } from 'react'
import getdata from '../Components/getdata.js'
import GridView from '../Components/GridView.js'
import validationTest from '../Components/validationTest.js'

function Tv() {

    const [tvDataPopular, setTvDataPopular] = useState([])
    const [tvDataTopRated, setTvDataTopRated] = useState([])
    const [tvDataNowPlaying, setTvDataNowPlaying] = useState([])

    useEffect(() => {
        getdata('get', '/tv/popular').then(result => {
            console.log(result)
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setTvDataPopular(gridData)
        })

        getdata('get', '/tv/top_rated').then(result => {
            console.log(result)
            
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setTvDataTopRated(gridData)
        })

        getdata('get', '/tv/airing_today').then(result => {
            console.log(result)
            const gridData = result.data.results.map(elements => {
                if(validationTest(elements, 'tv')){
                    return elements
                } else {
                    return true
                }
            })
            setTvDataNowPlaying(gridData)
        })

    }, [])

    return (
        <div>
            <GridView title='Now Popular' data={tvDataPopular} currentPage='tv' />
            <GridView title='Top Rated' data={tvDataTopRated} currentPage='tv' />
            <GridView title='Airing' data={tvDataNowPlaying} currentPage='tv' />          
        </div>
    )
}

export default Tv
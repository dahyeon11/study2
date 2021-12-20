import React, { Component } from 'react'
import getdata from '../Components/getdata.js'
import GridView from '../Components/GridView.js'
import Input from '../Components/Input.js'

class Search extends Component {
    state = {
        loading: false,
        keyword: '지옥',
        searchResultmov: false,
        searchResulttv: false
    }

    inputHandler = (e) => {
        if(e.key === 'Enter')
        {
            getdata('get', '/search/movie', {query: this.state.keyword}).then(result => {
                console.log(result)
                this.setState({searchResultmov: result.data.results})
            })
            getdata('get', '/search/tv', {query: this.state.keyword}).then(result => {
                console.log(result)
                this.setState({searchResulttv: result.data.results})
            })
        }
        this.setState({keyword: e.target.value})        
    }

    render() {        
        return (
            <div>
                <Input onKeyUp={(e) => this.inputHandler(e)} />
                {this.state.searchResultmov && <GridView title='Movie' data={this.state.searchResultmov} />}
                {this.state.searchResulttv && <GridView title='Tv' data={this.state.searchResulttv} />}
            </div>
        )
    }
}

export default Search
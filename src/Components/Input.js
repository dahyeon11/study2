import React, { Component } from 'react'
import styled from 'styled-components';


class Input extends Component {

    render() {
        
        return (
            <div>
                <Inputline onKeyUp={this.props.onKeyUp} />
            </div>
            
        )
    }
}

const Inputline = styled.input.attrs({
    type: 'text',
    placeholder: '영화와 Tv 프로그램을 입력하고 엔터를 눌러 검색하세요'
})`
font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
font-size: 32px;
color: #FFF;
font-weight: 300;
background-color: #333333;
type: text;
outline: none;
border: none;
width: 40em;
height: 3em;
`

export default Input
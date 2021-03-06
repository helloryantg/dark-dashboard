import React from 'react'
import styled from 'styled-components'
import Block from './Block'

const Container = styled.div`
    width: 400px;
    height: 400px;
    border: 4px solid black;
    display: flex;
    flex-direction: column;
`

const BlockRow = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`


const Calendar = () => {
    return (
        <Container className="Calendar">
            <BlockRow>
                <Block 
                    color={'red'}
                    border={'darkred'}
                    /> 
                <Block 
                    color={'blue'}
                    border={'darkblue'}
                    /> 
                <Block 
                    color={'black'}
                    border={'grey'}
                    /> 
                <Block 
                    color={'red'}
                    border={'darkred'}
                /> 
                <Block 
                    color={'red'} 
                    border={'darkred'}
                    /> 
            </BlockRow>
            <BlockRow>
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
            </BlockRow>
            <BlockRow>
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
            </BlockRow>
            <BlockRow>
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
            </BlockRow>
            <BlockRow>
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
                <Block /> 
            </BlockRow>
        </Container>
    )
}

export default Calendar

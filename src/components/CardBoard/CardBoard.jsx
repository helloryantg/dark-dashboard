import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    width: 300px;
    border-radius: 8px;
    border: 4px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`

const Inner = styled.div`
    height: 340px;
    width: 240px;
    border-radius: 8px;
    border: 2px solid black;
`

const CardBoard = () => {
    return (
        <Container>
            <Inner>
                
            </Inner>
        </Container>
    )
}

export default CardBoard
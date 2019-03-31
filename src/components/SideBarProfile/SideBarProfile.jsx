import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    height: 70%;
    width: 70%;
    border-radius: 4px;
    border: 2px solid black;
    background-color: lightgrey;
`

const SideBarProfile = () => {
    return (
        <Container>
            <Circle></Circle>
        </Container>
    )
}

export default SideBarProfile
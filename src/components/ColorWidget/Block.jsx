import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
    border-radius: 4px;
    height: 20%;
    width: 20%;
`

const Block = () => {
    return (
        <Container className="Block">
            Block
        </Container>
    )
}

export default Block



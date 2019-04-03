import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
    border-radius: 4px;
    width: 20%;
    background-color: ${props => props.color};
`

const Block = (props) => {
    return (
        <Container className="Block"
            color={props.color}
        >
            
        </Container>
    )
}

export default Block



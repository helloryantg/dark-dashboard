import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 10px solid;
    border-color: ${props => props.border || 'red'};
    width: 20%;
    background-color: ${props => props.color || 'blue'};
`

const Block = (props) => {
    return (
        <Container className="Block"
            color={props.color}
            border={props.border}
        >
            
        </Container>
    )
}

export default Block



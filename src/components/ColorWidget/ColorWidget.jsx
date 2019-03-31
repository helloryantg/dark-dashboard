import React, { Component } from 'react'
import styled from 'styled-components'
import Calendar from './Calendar'


const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

class ColorWidget extends Component {
    render() {
        return (
            <Container className="ColorWidget">
                <Calendar />
            </Container>
        )
    }
}

export default ColorWidget
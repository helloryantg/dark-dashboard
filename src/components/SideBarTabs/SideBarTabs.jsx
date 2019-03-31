import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .4rem;
`

const Item = styled.div`
`

const SideBarTabs = ({ title }) => {
    return (
        <Container className="SideBarTabs">
            <Item>This is the {title} tab</Item>
        </Container>
    )
}

export default SideBarTabs
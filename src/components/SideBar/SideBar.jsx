import React from 'react'
import styled from 'styled-components'
import SideBarTabs from '../SideBarTabs/SideBarTabs'

const Container = styled.div`
    border-right: 4px solid black;
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
`

class SideBar extends React.Component {
    state = {
        titles: [
            'Favorite Shows',
            'Favorite Games',
            'Things to get done'
        ]
    }
    
    render() {
        return (
            <Container className="SideBar">
                {this.state.titles.map((title, idx) => 
                    <SideBarTabs title={title} key={idx} />
                )}
            </Container>
        )
    }
}

export default SideBar
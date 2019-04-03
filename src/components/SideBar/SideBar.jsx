import React from 'react'
import styled from 'styled-components'
import SideBarTabs from '../SideBarTabs/SideBarTabs'
import SideBarProfile from '../SideBarProfile/SideBarProfile'

const Container = styled.div`
    border-right: 4px solid black;
    height: 100%;
    width: 400px;
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
                <SideBarProfile />

                {this.state.titles.map((title, idx) => 
                    <SideBarTabs title={title} key={idx} />
                )}
            </Container>
        )
    }
}

export default SideBar
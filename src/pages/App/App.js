import React, { Component } from 'react';
import SideBar from '../../components/SideBar/SideBar'
import ColorWidget from '../../components/ColorWidget/ColorWidget'
import CardBoard from '../../components/CardBoard/CardBoard'

import styled from 'styled-components'

const Container = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  height: 100vh;
  width: 100%;
  display: flex;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <SideBar />
        {/* <ColorWidget /> */}
        <CardBoard />
      </Container>
    )
  }
}

export default App;

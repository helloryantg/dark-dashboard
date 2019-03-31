import React, { Component } from 'react';

import SideBar from '../../components/SideBar/SideBar'

import styled from 'styled-components'

const Container = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  height: 100vh;
  width: 100%;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <SideBar />
      </Container>
    )
  }
}

export default App;

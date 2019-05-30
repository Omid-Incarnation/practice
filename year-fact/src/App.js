import React, { Component } from 'react'
import FactYear from './components/FactYear';

import {Container, ModalTitle as DivStyledAsH1} from 'react-bootstrap'

export default class App extends Component {
  render() {
    return (
      <Container>
        <DivStyledAsH1 className="mt-4">Bring meaning to your dates</DivStyledAsH1>
        <FactYear />
      </Container>
    )
  }
}


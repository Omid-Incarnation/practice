import React, {Component} from 'react'
import InputRange from 'react-input-range';
import './newStyle.css'

import {Container, Row, Card} from 'react-bootstrap'

export default class FactYear extends Component {
    state = {
        data: [],
        value: 2019,
        body: false
    }

    getValue = (event) => {
        this.setState({value: event.target.value})
    }

    onChangeComplete = () => {
        this.setState({value: this.state.value})
        console.log('is completed!', console.log(this.state.value))
    }

    handleButton = (theYear) => {
        theYear = this.state.value
        fetch(`http://numbersapi.com/${theYear}/year?json`)
            .then(res => res.json())
            .then(data => this.setState({data, body: true}))
    }

    render() {
        // console.log(this.state.theYear)
        return (
            <Container>
                <Row className="mt-4">
                    <InputRange
                        maxValue={2019}
                        minValue={1900}
                        value={this.state.value}
                        onChange={value => this.setState({value})}
                        onChangeComplete={this.onChangeComplete}/>
                </Row>
                <Row className="justify-content-center">
                    <button
                        onClick={this.handleButton}
                        className="mt-4 mb-4 btn btn-outline-primary">Submit</button>
                </Row>
                <Card body={this.state.body} className="mt-4">{this.state.data.text}</Card>
            </Container>
        )
    }
}

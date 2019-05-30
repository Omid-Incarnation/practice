import React, {Component} from 'react'
import InputRange from 'react-input-range';
import './newStyle.css'

import {Container, Card} from 'react-bootstrap'

export default class FactYear extends Component {
    state = {
        data: [],
        value: 2019
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
            .then(data => this.setState({data}))
    }

    render() {
        // console.log(this.state.theYear)
        return (
            <Container
                style={{
                backgroundColor: "red",
                width: '70%'
            }}>
                <InputRange
                    maxValue={2019}
                    minValue={1900}
                    value={this.state.value}
                    onChange={value => this.setState({value})}
                    onChangeComplete={this.onChangeComplete}/>
                <button onClick={this.handleButton}>Submit</button>
                <Card body>{this.state.data.text}</Card>
            </Container>
        )
    }
}

import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>This is the child Component</h1>
                <h3>Clicked by {this.props.match.params.path} Link</h3>
            </div>
        )
    }
}

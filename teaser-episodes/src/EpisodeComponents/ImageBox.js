import React, {Component} from 'react'

export default class ImageBox extends Component {
    render() {
        return (<img
            src={this.props.coverImg}
            className="mx-auto d-block shadow-sm rounded"
            alt={this.props.title}
            style={{
            width: "200px",
            height: "200px"
        }}/>)
    }
}

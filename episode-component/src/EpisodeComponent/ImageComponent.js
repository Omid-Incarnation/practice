import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

export default class ImageComponent extends Component {
    render() {
        // console.log(this.props)
        const {coverImg} = this.props
        return (<Image
            src={coverImg}
            rounded
            style={{
            width: "200px",
            height: "200px"
        }}/>)
    }
}

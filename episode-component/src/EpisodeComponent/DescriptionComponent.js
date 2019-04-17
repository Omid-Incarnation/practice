import React, {Component} from 'react'
import {Card, Container} from 'react-bootstrap'
import TextTruncate from 'react-text-truncate'

export default class DescriptionComponent extends Component {
    render() {
        // console.log(this.props)
        const {title, description} = this.props
        return (
            <Container>
                <Card.Title
                    className="text-left"
                    style={{
                    fontSize: "2rem"
                }}>{title}</Card.Title>
                <TextTruncate
                    className="text-justify"
                    line={5}
                    truncateText="  …"
                    text={description}
                    textTruncateChild={< a href = "a Link" > ReadMe </a>}/>
            </Container>
        )
    }
}

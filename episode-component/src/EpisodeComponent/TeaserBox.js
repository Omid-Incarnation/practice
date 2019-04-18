import React, {Component} from 'react'
import {Card} from "react-bootstrap"

export default class TeaserBox extends Component {
    state = {
        title: "This is going to show the title",
        coverImg: "https://via.placeholder.com/200"
    }
    render() {
        const {title, coverImg} = this.state
        return (
            <Card
                className="shadow p-3 mb-5 bg-white"
                style={{
                width: '18rem'
            }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Img
                    className="mx-auto d-block"
                    variant="buttom"
                    src={coverImg}
                    style={{
                        width: "200px",
                        height: "200px"
                    }}/>
            </Card>
        )
    }
}

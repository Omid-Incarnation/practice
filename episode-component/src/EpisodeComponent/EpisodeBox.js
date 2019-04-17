import React, {Component} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import ImageComponent from './ImageComponent';
import DescriptionComponent from './DescriptionComponent'
import HashtagesComponent from './HashtagsComponent'

import TextDescription from "./TextDescription"

export default class EpisodeBox extends Component {
    state = {
        title: "This is going to show the title",
        //a link to the photo
        coverImg: "https://via.placeholder.com/200",
        description: TextDescription,
        //Array of Hashtages
        hashtags: ["#firstHashtage", "#SecondHashtage", "#ThirdHashtage", "#OneMore"]
    }
    render() {
        const {title, coverImg, description, hashtags} = this.state
        return (
            <React.Fragment>

                <Container className="mx-auto rounded shadow p-3 mb-5 bg-white">
                    <Row>
                        <Col lg={9} md={8} sm={12}>
                            <DescriptionComponent title={title} description={description}/>
                            <HashtagesComponent hashtags={hashtags}/>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <ImageComponent coverImg={coverImg} title={title}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

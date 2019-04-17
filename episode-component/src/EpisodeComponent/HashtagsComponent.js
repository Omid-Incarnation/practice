import React, * as react from 'react'
import {Container} from 'react-bootstrap'

export default class HashtagsComponent extends react.Component {
    render() {
        const hashtagsList = this
            .props
            .hashtags
            .map(hashtag => <li
                className="list-inline-item border border-primary rounded px-2 mr-2 my-1  text-primary"
                key={hashtag}>
                {hashtag}
            </li>)
        return (
            <Container>
                <ul className="list-unstyled list-inline mt-2 text-left">
                    {hashtagsList}
                </ul>
            </Container>
        )
    }
}

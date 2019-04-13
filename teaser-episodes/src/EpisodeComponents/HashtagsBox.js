import React, {Component} from 'react'

//Convert any text to #hashtag
const hashtagfy = require('hashtagfy')

export default class HashtagsBox extends Component {
    render() {
        const hashtagsList = this
            .props
            .hashtags
            .map(hashtag => <li
                className="list-inline-item border border-primary rounded px-2 mr-2 my-1  text-primary" key={hashtag}>
                {hashtagfy(hashtag)}
            </li>)
        return (
            <React.Fragment>
                <ul className="list-unstyled list-inline mt-5">
                    {hashtagsList}
                </ul>
            </React.Fragment>
        )
    }
}

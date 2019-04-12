import React, {Component} from 'react'

export default class HashtagsBox extends Component {
    render() {
        const hashtagsList = this
            .props
            .hashtags
            .map(hashtag => <li
                className="list-inline-item border border-primary rounded px-2 mr-2 my-1  text-primary">
                {hashtag}
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

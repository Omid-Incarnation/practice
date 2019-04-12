import React, {Component} from 'react'

export default class HashtagsBox extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="list-unstyled list-inline mt-5">
                    <li
                        className="list-inline-item border border-primary rounded px-2 mr-2 my-1  text-primary">
                        {this.props.hashtags[0]}
                    </li>
                    <li
                        className="list-inline-item border border-primary rounded px-2 mr-2 my-1 text-primary">
                        {this.props.hashtags[1]}
                    </li>
                    <li
                        className="list-inline-item border border-primary rounded px-2 mr-2 my-1 text-primary">
                        {this.props.hashtags[2]}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

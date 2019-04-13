import React, {Component} from 'react'
import TextTruncate from 'react-text-truncate'

export default class DescriptionBox extends Component {
    render() {
        const {description, title} = this.props
        return (
            <div
                className="p-1"
                style={{
                height: "12rem"
            }}>
                <h2>{title}</h2>
                <TextTruncate
                    className="text-justify"
                    line={5}
                    truncateText="…"
                    text={description.props.children}
                    textTruncateChild={< a href = "This can be link" > Read on </a>}/>
            </div>
        )
    }
}

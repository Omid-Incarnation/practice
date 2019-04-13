import React, {Component} from 'react'
import Data from './Data'

export default class TeaserBox extends Component {
    state = {
        title: Data[0].title,
        coverImg: Data[0].coverImg
    }
    render() {
        const {title, coverImg} = this.state
        return (
            <div
                className="container mx-auto rounded shadow p-3 mb-5 bg-white col-lg-3 col-md-4 col-sm-12">
                <h5 className="text-center mt-2 mb-4">{title}</h5>
                <img
                    src={coverImg}
                    className="mx-auto d-block shadow-sm rounded"
                    alt={title}
                    style={{
                    width: "200px",
                    height: "200px"
                }}/>
            </div>
        )
    }
}

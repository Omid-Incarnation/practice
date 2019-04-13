import React, {Component} from 'react';
import HashtagsBox from "./HashtagsBox"
import ImageBox from "./ImageBox"
import DescriptionBox from "./DescriptionBox"
import Data from './Data'

class EpisodeBox extends Component {
    state = {
        title: Data[0].title,
        coverImg: Data[0].coverImg,
        description: Data[0].description,
        hashtags: Data[0].hashtags
    }

    render() {
        const {title, coverImg, description, hashtags} = this.state
        return (
            <React.Fragment>
                <div className="container mx-auto row rounded shadow p-3 mb-5 bg-white">
                    <div className="col-lg-9 col-md-8 col-sm-12 my-3">
                        <DescriptionBox title={title} description={description}/>
                        <HashtagsBox hashtags={hashtags}/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 my-3">
                        <ImageBox coverImg={coverImg} title={title}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default EpisodeBox;

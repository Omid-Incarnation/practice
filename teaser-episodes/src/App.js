import React, {Component} from 'react'
import EpisodeBox from './EpisodeComponents/EpisodeBox';
import TeaserBox from './EpisodeComponents/TeaserBox';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <EpisodeBox/>
                <TeaserBox/>
            </React.Fragment>
        )
    }
}

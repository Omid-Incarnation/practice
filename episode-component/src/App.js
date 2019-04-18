import React, {Component} from 'react';
import EpisodeBox from './EpisodeComponent/EpisodeBox';
import TeaserBox from './EpisodeComponent/TeaserBox';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <EpisodeBox />
                <TeaserBox />
            </div>
        );
    }
}

export default App;

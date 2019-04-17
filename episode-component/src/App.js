import React, {Component} from 'react';
import EpisodeBox from './EpisodeComponent/EpisodeBox';

import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <EpisodeBox />
            </div>
        );
    }
}

export default App;

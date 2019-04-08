import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import Duration from './Components/Duration'

import './App.css';

class App extends Component {
    state = {
        url: 'https://s3.eu-north-1.amazonaws.com/hyf-fabric/podcasts/danish-mit-brune-taeppe.' +
                'mp3',
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.5,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }

    onPlay = () => {
        console.log('onPlay')
        this.setState({playing: true})
    }

    onPause = () => {
        console.log('onPause')
        this.setState({playing: false})
    }

    //Volume
    setVolume = e => {
        // console.log(this.state.volume)
        this.setState({
            volume: parseFloat(e.target.value)
        })
    }

    onProgress = state => {
        // console.log('onProgress', state)
        this.setState(state)
    }

    onDuration = (duration) => {
        this.setState({duration})
    }

    ref = player => {
        this.player = player
    }

    render() {
        const {url, playing, volume, duration, played} = this.state
        return (
            <React.Fragment>
                <h1>My App</h1>
                <ReactPlayer
                    url={url}
                    ref={this.ref}
                    volume={volume}
                    playing={playing}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    onProgress={this.onProgress}
                    onDuration={this.onDuration}/>
                <div>
                    <Duration seconds={duration}/>
                    <br/>
                    <Duration seconds={duration * played}/>
                </div>
                <br/>
                <button onClick={this.onPlay}>Play</button>
                <button onClick={this.onPause}>Pause</button>
                <br/>
                <input
                    type='range'
                    min={0}
                    max={1}
                    step='any'
                    value={volume}
                    onChange={this.setVolume}/>
                <br/>
                <progress max={1} value={played}/>
            </React.Fragment>
        );
    }
}

export default App;

import React from 'react';
import {PlayButton, Timer} from 'react-soundplayer/components';
import {withCustomAudio} from 'react-soundplayer/addons';

const streamUrl = 'https://s3.eu-north-1.amazonaws.com/hyf-fabric/podcasts/danish-mit-brune-taeppe.' +
        'mp3';

const clientId = "1"
const Title = "This is the Title";

const Player = withCustomAudio(props => {
    let {track, currentTime} = props;
    console.log(props)
    return (
        <div>
            <PlayButton
                className=""
                onPlayClick={() => {
                console.log('play button clicked!');
            }}
                {...props}/>
            <Timer
                className=""
                duration={track
                ? track.duration / 1000
                : 0}
                currentTime={currentTime}
                {...props}/>
        </div>
    );
});

const App = () => {
    return (<Player
        streamUrl={streamUrl}
        clientId={clientId}
        trackTitle={Title}
        onReady={() => console.log('track is loaded!')}/>);
};

export default App;
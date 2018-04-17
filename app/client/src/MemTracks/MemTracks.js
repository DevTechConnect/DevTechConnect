import React from 'react';

import TrackQV from '../TrackQV/TrackQV'

import './MemTracks.css';

const MemTracks = (props) => {
    return (
        <div>
            <h1>These are all the tracks you have completed.</h1>
            <TrackQV 
                startTrackHandler={props.startTrackHandler} />
        </div>
    )
}
        
export default MemTracks;
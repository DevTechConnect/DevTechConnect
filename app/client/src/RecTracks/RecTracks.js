import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RecTracks.css';

const RecTracks = (props) => {
    return (
        <div>
            <TrackQV 
                startTrackHandler={props.startTrackHandler} />
        </div>
    )
};

export default RecTracks;
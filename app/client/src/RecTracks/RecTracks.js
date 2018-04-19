import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RecTracks.css';

const RecTracks = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <TrackQV 
                    startTrackHandler={props.startTrackHandler} />
            </div>
        </div>
    )
};

export default RecTracks;
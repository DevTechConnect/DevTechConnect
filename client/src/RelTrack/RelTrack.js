import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RelTrack.css';

const RelTrack = () => {
    return (
        <div>
            <h2>More Tracks to Try</h2>
            <hr />
            <TrackQV />
            <TrackQV />
            <TrackQV />
        </div>
    )
};

export default RelTrack;
import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RelTrack.css';

const RelTrack = () => {
    return (
        <div>
            <h2>Related Tracks</h2>
            <TrackQV />
            <TrackQV />
            <TrackQV />
        </div>
    )
};

export default RelTrack;
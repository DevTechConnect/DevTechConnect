import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RelTrack.css';

const RelTrack = () => {
    return (
        <div>
            <h1 className='content-header'>More Tracks to Try</h1>
            <hr />
            <TrackQV />
            <TrackQV />
            <TrackQV />
        </div>
    )
};

export default RelTrack;
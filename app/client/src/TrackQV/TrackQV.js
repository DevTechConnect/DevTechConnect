import React from 'react';

import Image from '../Image/Image';

import './TrackQV.css';

const TrackQV = (props) => {
    return (
        <div>
            <Image className='inline' src={require('./html_css_track.png')} width={200} height={200} mode='fit' />
            <h3>Track Name</h3>
            <p>Track Duration: 00:00h</p>
            <p>This is where we will insert a short description about the track being shown.</p>
            <button type='button' name='getStarted' onClick={props.startTrackHandler}>
                Start Track
            </button>
        </div>
    )
};

export default TrackQV;
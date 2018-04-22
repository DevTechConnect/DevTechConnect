import React from 'react';

import Image from '../Image/Image';

import './TrackQV.css';

const TrackQV = (props) => {
    return (
        <div className='track-qv'>
        {console.log(props.trackId)}
            <Image className='inline-block track-image' src={require(`./${1}.png`)} width={props.imgDim} height={props.imgDim} mode='fit' />
            <hr />
            <h3>{props.trackName}</h3>
            <hr />
            <button type='button' name='getStarted' onClick={props.startTrackHandler}>
                Start Track
            </button>
        </div>
    )
};

export default TrackQV;
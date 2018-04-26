import React, { Component } from 'react';

import Image from '../Image/Image';

import './TrackQV.css';

const TrackQV = (props) => {
        
        return (
            <div className='track-qv'>
            {
            props.trackId ? 
                <div>
                    <Image className='inline-block track-image' src={require(`./${props.trackId}.png`)} width={props.imgDim} height={props.imgDim} mode='fit' />
                    <hr />
                    <h3 className='track-name'>{props.trackName}</h3>
                    <hr />
                    <button type='button' name='getStarted' onClick={props.startTrackHandler}>
                        Start Track
                    </button>
                </div> : null
            }
            </div>
        )
};

export default TrackQV;
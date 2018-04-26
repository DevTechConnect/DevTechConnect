import React from 'react';

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
                    <div className='track-name-box'>
                        <h3 className='track-name'>{props.trackName}</h3>
                    </div>
                    <hr />
                    {
                    props.message ?
                        <div className='user-message'>
                            <p>{props.message}</p>
                        </div> :
                        <div>
                            <button type='button' name='getStarted' id={props.trackId} onClick={((e) => props.startTrkClickHandler(e, props.trackId))}>
                                Start Track
                            </button>
                        </div>
                    }        
                </div> : null
            }
            </div>
        )
};

export default TrackQV;
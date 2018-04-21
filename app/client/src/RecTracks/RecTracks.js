import React from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RecTracks.css';

const RecTracks = (props) => {
    return (
        <div className="rec-tracks-bar row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 inline-block">
                <TrackQV className='inline-block track-qv-rec'
                    startTrackHandler={props.startTrackHandler} 
                    imgDim={75} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 inline-block">
                <TrackQV className='inline-block track-qv-rec'
                    startTrackHandler={props.startTrackHandler} 
                    imgDim={75} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 inline-block">
                <TrackQV className='inline-block track-qv-rec'
                    startTrackHandler={props.startTrackHandler} 
                    imgDim={75} />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 inline-block">
                <TrackQV className='inline-block track-qv-rec'
                    startTrackHandler={props.startTrackHandler} 
                    imgDim={75} />
            </div>
        </div>
    )
};

export default RecTracks;
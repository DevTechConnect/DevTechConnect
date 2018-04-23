import React, { Component } from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RecTracks.css';

class RecTracks extends Component {
    
    state={
        allTracks:this.props.allTracks
    }
    
    render() {
        
        return (
            <div className="rec-tracks-bar">
                <div className='track-qv-rec'>
                    <TrackQV
                        startTrackHandler={this.props.startTrackHandler}
                        trackName={'HTML/CSS'}
                        imgDim={75} 
                        trackID={1}
                        />
                </div>
                <div className='track-qv-rec'>
                    <TrackQV
                        startTrackHandler={this.props.startTrackHandler}
                        trackName={'JavaScript & jQuery'}
                        imgDim={75} 
                        trackID={2}
                        />
                </div>
                <div className='track-qv-rec'>
                    <TrackQV
                        startTrackHandler={this.props.startTrackHandler}
                        trackName={'MongoDB'}
                        imgDim={75} 
                        trackID={3}
                        />
                </div>
            </div>
        )
    }
};

export default RecTracks;
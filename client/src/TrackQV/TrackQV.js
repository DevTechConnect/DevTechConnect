import React, { Component } from 'react';

import Image from '../Image/Image';

import './TrackQV.css';

class TrackQV extends Component {
    
    state={
        allTracks: this.props.allTracks
    }
    
    startTrack = (event) => {
        this.props.startTrackHandler(event);
    }
    
    render() {
        console.log("All tracks at quickview props: " + this.state.allTracks)
        return (
            <div className='track-qv'>
            {console.log("This track id: " + this.props.trackId)}
                <Image className='inline-block track-image' src={require(`./${1}.png`)} width={this.props.imgDim} height={this.props.imgDim} mode='fit' />
                    <hr />
                    <h3 className='track-name'>{this.props.trackName}</h3>
                    <hr />
                    <button type='button' name='getStarted' onClick={this.startTrack}>
                        Start Track
                    </button>
            </div>
        )
    }
};

export default TrackQV;
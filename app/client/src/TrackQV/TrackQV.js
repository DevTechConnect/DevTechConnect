import React, { Component } from 'react';

import Image from '../Image/Image';

import './TrackQV.css';

class TrackQV extends Component {
    render() {
        return (
            <div className='track-qv'>
            {console.log(this.props.trackId)}
                <Image className='inline-block track-image' src={require(`./${1}.png`)} width={this.props.imgDim} height={this.props.imgDim} mode='fit' />
                    <hr />
                    <h3>{this.props.trackName}</h3>
                    <hr />
                    <button type='button' name='getStarted' onClick={this.props.startTrackHandler}>
                        Start Track
                    </button>
            </div>
        )
    }
};

export default TrackQV;
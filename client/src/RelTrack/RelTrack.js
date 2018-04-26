import React, { Component } from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RelTrack.css';

class RelTrack extends Component {
    render() {
        
        let relTracksHolder = null;
        
        if (this.props.relTracks) {
                relTracksHolder = (
                    <div>
                        {this.props.relTracks.map((person, index) => {
                            return <TrackQV 
                                trackId={this.props.relTracks[index].relatedTrackId}
                                trackName={this.props.relTracks[index].trackName}
                                imgDim={100}
                                key={index} 
                                message={this.props.message} />
                        })}
                    </div>
                );
        }
    
        return (
            <div>
                <h1 className='content-header'>More Tracks to Try</h1>
                <div className='content-box'>
                    {relTracksHolder}
                </div>
            </div>
        )
    }
};

export default RelTrack;
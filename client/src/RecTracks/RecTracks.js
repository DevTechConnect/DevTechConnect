import React, { Component } from 'react';

import TrackQV from '../TrackQV/TrackQV';

import './RecTracks.css';

class RecTracks extends Component {
    
    render() {
        
        let allAvailTracks = null;

        if (this.props.allTracks) {
                allAvailTracks = (
                    <div>
                        {this.props.allTracks.map((person, index) => {
                            return <TrackQV 
                                trackId={this.props.allTracks[index].trackId}
                                trackName={this.props.allTracks[index].trackName}
                                startTrkClickHandler={this.props.startTrkClickHandler}
                                key={index} />
                        })}
                    </div>
                );
        }
    
        let frontEndTracks = null;

        if (this.props.allTracks) {
                frontEndTracks = (
                    <div>
                        {this.props.allTracks.map((person, index) => {
                            if (this.props.allTracks[index].trackId === 1 || this.props.allTracks[index].trackId === 2)
                            return <TrackQV 
                                trackId={this.props.allTracks[index].trackId}
                                trackName={this.props.allTracks[index].trackName}
                                startTrkClickHandler={this.props.startTrkClickHandler}
                                key={index} />
                        })}
                    </div>
                );
        }
        
        let backEndTracks = null;

        if (this.props.allTracks) {
                backEndTracks = (
                    <div>
                        {this.props.allTracks.map((person, index) => {
                            if (this.props.allTracks[index].trackId === 3)
                            return <TrackQV 
                                trackId={this.props.allTracks[index].trackId}
                                trackName={this.props.allTracks[index].trackName}
                                startTrkClickHandler={this.props.startTrkClickHandler}
                                key={index} />
                        })}
                    </div>
                );
        }
        
        return (
            <div>
                <div className="rec-tracks-bar">
                    <h1 className='page-second rec-track-head'>All Available Tracks</h1>
                    {
                    this.props.allTracks ?
                        <div className='track-qv-rec'>
                            {allAvailTracks}
                        </div> : null
                    }
                </div>
                <div className="rec-tracks-bar">
                    <h1 className='page-second rec-track-head'>Front-End Focus Tracks</h1>
                    {
                    this.props.allTracks ?
                        <div className='track-qv-rec'>
                            {frontEndTracks}
                        </div> : null
                    }
                </div>
                <div className="rec-tracks-bar">
                    <h1 className='page-second rec-track-head'>Back-End Focus Tracks</h1>
                    {
                    this.props.allTracks ?
                        <div className='track-qv-rec'>
                            {backEndTracks}
                        </div> : null
                    }
                </div>
            </div>
        )
    }
};

export default RecTracks;
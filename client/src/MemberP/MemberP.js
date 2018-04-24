import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MemberInfo from '../MemberInfo/MemberInfo';
import Achievement from '../Achievement/Achievement';
import TrackQV from '../TrackQV/TrackQV';

import './MemberP.css';

class MemberP extends Component {

    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }
    
    resourceClickHandler = () => {
        this.props.setAppState("Resources")
    }
    
    homeClickHandler = () => {
        this.props.setAppState("Home")
    }
    
    startTrackHandler = () => {
        this.props.setAppState("LimitedFocus")
    }
    
    render() {
        
        let complTracks = null;
        if (this.props.userComplTracks) {
            for (let j = 0; j < this.props.userComplTracks.length; j++) {
                complTracks = (
                    <div>
                        {this.props.userComplTracks.map((index) => {
                            return <Achievement 
                                trackId={this.props.userComplTracks[j]}
                                key={index} />
                        })}
                    </div>
                );
            }
        }
    
        let savedTracks = null;

        if (this.props.user.tracks) {
            savedTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 0 && this.props.user.tracks[index].trackMarkedComplete !== 1 && index < 3) {
                       return  <div className='user-saved-main'>
                            <div  className='mem-saved-track-qv'>
                                <TrackQV
                                    trackId={this.props.user.tracks[index].trackId}
                                    imgDim={75}
                                    trackName={this.props.user.tracks[index].trackName}
                                    key={index} 
                                    startTrackHandler={this.startTrackHandler} />
                            </div>
                        </div>
                }
                    })}
                </div>
            );
        }
        
        console.log(this.props.userComplTracks)
        return (
            <div>
                <Navbar 
                    memClickHandler={this.memClickHandler} 
                    resourceClickHandler={this.resourceClickHandler} 
                    homeClickHandler={this.homeClickHandler} 
                    fetchArticlesHandler={this.fetchArticlesHandler} />
                <Sidebar 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} />
                <div className='mem-box'>
                    <MemberInfo 
                        user={this.props.user} 
                        complTracks={this.props.userComplTracks} />
                    <p className='user-track-header'>
                        Your Saved Tracks
                    </p>
                    {savedTracks}
                    <p className='user-track-header'>
                        Your Completed Tracks
                    </p>
                    {complTracks}
                </div>
            </div>
        )
    }
};

export default MemberP;
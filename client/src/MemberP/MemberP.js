import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MemberInfo from '../MemberInfo/MemberInfo';
import Achievement from '../Achievement/Achievement';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';

import './MemberP.css';

class MemberP extends Component {

    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }
    
    resourceClickHandler = () => {
        this.props.setAppState("Resources");
    }
    
    homeClickHandler = () => {
        this.props.setAppState("Home")
    }
    
    startTrackHandler = () => {
        this.props.setAppState("LimitedFocus")
    }
    
    render() {
        
//        let complTracks = null;
//        if (this.props.userComplTracks) {
//            for (let j = 0; j < this.props.userComplTracks.length; j++) {
//                complTracks = (
//                    <div>
//                        {this.props.userComplTracks.map((index) => {
//                            return <Achievement 
//                                trackId={this.props.userComplTracks[j]}
//                                key={index} />
//                        })}
//                    </div>
//                );
//            }
//        }
    
        
        
        
        let complTracks = null;

        if (this.props.user.tracks) {
            complTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 1 && this.props.user.tracks[index].trackMarkedComplete !== 0) {
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
        
        
        let savedTracks = null;

        if (this.props.user.tracks) {
            console.log('test' + Promise.resolve(this.props.user.tracks))
            savedTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 0) {
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
        
        
        let articles = null;
        
        if (this.props.user.bookmarks) {
            let bookmarks = this.props.user.bookmarks
            articles = (
                <div>
                    {bookmarks.map((p, index) => {
                        return <Article 
                            artName={this.props.user.bookmarks[index].linkName}
                            link={this.props.user.bookmarks[index].url}
                            key={index} />
                    })}
                </div>
            );
        }
     
        
        console.log(Promise.resolve(this.props.userComplTracks))
        return (
            <div>
                <Navbar 
                    memClickHandler={this.memClickHandler} 
                    resourceClickHandler={this.resourceClickHandler} 
                    homeClickHandler={this.homeClickHandler} 
                    fetchArticlesHandler={this.fetchArticlesHandler} />
                <div className='mem-box'>
                    <div className='mem-p-head'>
                        <MemberInfo 
                            user={this.props.user} />
                    </div>
                    <div className='content-box-mem-p'>
                        <p className='mem-p-second'>
                            Your Saved Tracks
                        </p>
                        {savedTracks}
                        <p className='mem-p-second'>
                            Your Completed Tracks
                        </p>
                        {complTracks}
                        <p className='mem-p-second'>
                            Your Saved Articles
                        </p>
                        {articles}
                    </div>
                </div>
            </div>
        )
    }
};

export default MemberP;
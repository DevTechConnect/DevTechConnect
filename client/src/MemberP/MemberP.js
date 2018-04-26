import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import MemberInfo from '../MemberInfo/MemberInfo';
import Achievement from '../Achievement/Achievement';
import TrackQV from '../TrackQV/TrackQV';
import Article from '../Article/Article';
import LimitedFModule from '../LimitedFModule/LimitedFModule';

import './MemberP.css';

class MemberP extends Component {
    
    state= {
        startTrackClkd: false,
        startTrack: false,
        selTrackId: 0,
        memClkd: true
    }

    startTrkClickHandler = (e, id) => {
        const startClkd = this.state.startTrackClkd;
        this.setState({
            startTrackClkd: !startClkd,
            selTrackId: id-1,
            memClkd: false
        });
        console.log(id);
    };

    startNowClickHandler = () => {
        const startNowClkd = this.state.startTrack;
        this.setState({
            startTrack: !startNowClkd,
            memClkd: false
        });
    };

    memClickedStateHandler = () => {
        this.setState({
            memClkd: true,
            startTrackClkd: false,
            startTrack: false
        });
    };

    memClickHandler = () => {
        this.props.setAppState("MemberP");
        this.memClickedStateHandler();
    }
    
    resourceClickHandler = () => {
        this.props.setAppState("Resources");
    }
    
    homeClickHandler = () => {
        this.props.setAppState("Home")
    }
    
    
    render() {

        let complTracks = null;

        if (this.props.user.tracks) {
            complTracks = (
                <div>
                    {this.props.user.tracks.map((user, index) => {
                     if (this.props.user.tracks[index].trackMarkedComplete === 1 && this.props.user.tracks[index].trackMarkedComplete !== 0) {
                       return  <div className='user-saved-main'>
                            <div  className='mem-saved-track-qv'>
                                <Achievement
                                    trackId={this.props.user.tracks[index].trackId}
                                    key={index} 
                                />
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
                                    startTrkClickHandler={this.startTrkClickHandler} />
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
                            descr={this.props.user.bookmarks[index].linkDescription}
                            key={index} />
                    })}
                </div>
            );
        }
     
        return (
            <div>
            {
            this.state.startTrackClkd === false && this.state.memClkd === true ?
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
                            <div className='art-holder'>
                                {articles}
                            </div>
                        </div>
                    </div>
                </div> : null
            }
            {
            this.state.startTrackClkd && this.state.memClkd === false ?
                <div>
                    <Navbar 
                        memClickHandler={this.memClickHandler} 
                        resourceClickHandler={this.resourceClickHandler} 
                        homeClickHandler={this.homeClickHandler} 
                        fetchArticlesHandler={this.fetchArticlesHandler} />
                    {
                    this.state.startTrack === false ?
                        <div className='land-box'>
                            <h1>Limited Focus Track</h1>
                            <div>
                                <h2>
                                    Welcome to your {this.state.trackName} learning track.
                                </h2>
                                <p>
                                    Follow along and check off each step you complete to track of your progress. Most importantly, don/'t skip the practice; practice will be your quickest teacher in code. We will give you achievements along the way - you can find those on your <span className='link' onClick={this.memClickHandler}>Member Page</span>. 
                                </p>
                                <p>
                                    We're' happy you're here. Stick around, and like always, keep moving.
                                </p>
                                <button type='button' name='startButton' onClick={this.startNowClickHandler}>
                                    Start Track 
                                </button>
                            </div> 
                        </div> : null
                    }
                    {
                    this.state.startTrack && this.state.memClkd === false ?
                        <div className='land-box'>
                            <LimitedFModule 
                                allTracks={this.props.allTracks}
                                trackId={this.state.selTrackId} 
                                relTrackHandler={this.props.relTrackHandler} 
                                relTracks={this.props.relTracks} /> 
                        </div> : null
                    }
                </div> : null
            }
            </div>
        )
    }
};

export default MemberP;
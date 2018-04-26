import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import RecTracks from '../RecTracks/RecTracks';
import LimitedFocus from '../LimitedFocus/LimitedFocus';
import LimitedFModule from '../LimitedFModule/LimitedFModule';

import './Home.css';

class Home extends Component {
    
    state= {
        startTrackClkd: false,
        startTrack: false,
        selTrackId: 0,
        homeClkd: true
    }

    startTrkClickHandler = (e, id) => {
        const startClkd = this.state.startTrackClkd;
        this.setState({
            startTrackClkd: !startClkd,
            selTrackId: id-1,
            homeClkd: false
        });
        console.log(id);
    };

    startNowClickHandler = () => {
        const startNowClkd = this.state.startTrack;
        this.setState({
            startTrack: !startNowClkd,
            homeClkd: false
        });
    };

    homeClickedStateHandler = () => {
        this.setState({
            homeClkd: true,
            startTrackClkd: false,
            startTrack: false
        });
    };
    
    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }
    
    resourceClickHandler = () => {
        this.props.setAppState("Resources");
    }
    
    homeClickHandler = () => {
        this.props.setAppState("Home"),
        this.homeClickedStateHandler();
    }
    

    
    render () {
        
    return (
        <div>
        {
        this.state.startTrackClkd === false && this.state.homeClkd === true ?
            <div>
                <Navbar 
                    memClickHandler={this.memClickHandler} 
                    resourceClickHandler={this.resourceClickHandler} 
                    homeClickHandler={this.homeClickHandler} 
                    fetchArticlesHandler={this.fetchArticlesHandler} />
                <div>
                    <Sidebar 
                        user={this.props.user} 
                        userComplTracks={this.props.userComplTracks}
                        userSavedTracks={this.props.userSavedTracks} 
                        startTrkClickHandler={this.startTrkClickHandler}
                        allTracks={this.props.allTracks} />
                    <div className='home-box'>
                        <h1 className='page-head'>Welcome to DevTech Connect</h1>
                        <h2 className='page-second'>Where You Can Keep Moving</h2>
                        <div className='rec-art-box'>
                            <h1 className='page-second'>Recently Added Articles</h1>
                                <Article />
                                <Article />
                                <Article />
                                <Article />
                                <Article />
                        </div>
                         <div className='inline-block'>
                            <div>
                                <RecTracks 
                                    startTrkClickHandler={this.startTrkClickHandler} 
                                    allTracks={this.props.allTracks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null
        } 
        {
        this.state.startTrackClkd && this.state.homeClkd === false ?
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
                                Follow along and check off each step you complete to track of your progress. Most importantly, don/'t skip the practice; practice will be your quickest teacher in code. We will give you achievements along the way - you can find those on your <a className='link' href="#" onClick={this.memClickHandler}>Member Page</a>. 
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
                this.state.startTrack && this.state.homeClkd === false ?
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

export default Home;
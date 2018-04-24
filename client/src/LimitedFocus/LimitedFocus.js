import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import LimitedFModule from '../LimitedFModule/LimitedFModule';

import './LimitedFocus.css';

class LimitedFocus extends Component {
    
    state = {
        startTrack: false
    }
    
    startNowClickHandler = () => {
        const startNowClkd = this.state.startTrack;
        this.setState({
            startTrack: !startNowClkd,
        });
    };

    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }
    
    resourceClickHandler = () => {
        this.props.setAppState("Resources")
    }
    
    homeClickHandler = () => {
        this.props.setAppState("Home")
    }
    
    render(props) {
        return (
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
                this.state.startTrack ?
                    <div className='land-box'>
                        <LimitedFModule 
                            trackName={'HTML/CSS'} 
                                allTracks={this.props.allTracks}
                                trackId={0}/> 
                    </div> : null
                }
            </div>
        )
    };
};

export default LimitedFocus;
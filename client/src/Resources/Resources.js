import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import RecTracks from '../RecTracks/RecTracks';

import './Resources.css';

class Home extends Component {
    
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
    
    render () {
        
    return (
        <div>
            <Navbar 
                memClickHandler={this.memClickHandler} 
                resourceClickHandler={this.resourceClickHandler} 
                homeClickHandler={this.homeClickHandler} />
            <div>
                <Sidebar 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} 
                    allTracks={this.props.allTracks} />
                <div className='home-box'>
                    <h1>DevTech Connect Resources</h1>
                    <hr />
                    <div>
                        <div>
                        <h1>Browse Our Articles</h1>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>
                    </div>
                    <hr />
                     <div className='inline-block'>
                        <div>
                            <h2>All Available Tracks</h2>
                            <RecTracks 
                                startTrackHandler={this.startTrackHandler} 
                                allTracks={this.props.allTracks} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
};

export default Home;
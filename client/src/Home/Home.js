import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import RecTracks from '../RecTracks/RecTracks';

import './Home.css';

class Home extends Component {
    
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
    
    render () {
        
    return (
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
                    startTrackHandler={this.startTrackHandler}
                    allTracks={this.props.allTracks} />
                <div className='home-box'>
                    <h1 className='page-head'>Welcome to DevTech Connect</h1>
                    <h2 className='page-second'>Where You Can Keep Moving</h2>
                    <hr />
                    <div>
                        <div>
                        <h1 className='page-second'>Recently Added Articles</h1>
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
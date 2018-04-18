import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Article from '../Article/Article';
import RecTracks from '../RecTracks/RecTracks';

import './Home.css';

class Home extends Component {
    
    constructor (props) {
        super(props)
    }
    
    memClickHandler = () => {
        this.props.setAppState("MemberP")
    }
    
    trackClickHandler = () => {
        this.props.setAppState("AllTracks")
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
                trackClickHandler={this.trackClickHandler} 
                homeClickHandler={this.homeClickHandler} />
            <Sidebar 
                user={this.props.user} />
            <div className='head'>
                <h1>DevTech Connect</h1>
                <h2>Keep Moving</h2>
            </div>
            <div className='article-holder'>
                <Article />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
            <div className='rec-tracks'>
                <RecTracks 
                    startTrackHandler={this.startTrackHandler} />
            </div>
        </div>
    )
    }
};

export default Home;
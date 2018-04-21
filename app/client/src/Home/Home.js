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

//    this.props.complTrackHandler();
    this.props.memTrackHandler();
        
    return (
        <div>
            <Navbar 
                memClickHandler={this.memClickHandler} 
                trackClickHandler={this.trackClickHandler} 
                homeClickHandler={this.homeClickHandler} />
            <div className="row">
                <Sidebar 
                    user={this.props.user} 
                    userComplTracks={this.props.userComplTracks}
                    userSavedTracks={this.props.userSavedTracks} />
                <div className="col-12 col-sm-12 col-md- col-lg-8 col-xl-8 inline-block">
                    <h1>Welcome to DevTech Connect</h1>
                    <h2>Where You Can Keep Moving</h2>
                    <hr />
                    <div className='row inline-block'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <h1>Popular Articles</h1>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>
                    </div>
                    <hr />
                     <div className='row inline-block'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <RecTracks 
                                startTrackHandler={this.startTrackHandler} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
};

export default Home;
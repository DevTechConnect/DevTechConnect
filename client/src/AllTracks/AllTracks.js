import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import TrackQV from '../TrackQV/TrackQV';

import './AllTracks.css';

class AllTracks extends Component {
    
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
            <Sidebar />
            <h1>DevTech Connect</h1>
            <h2>Keep Moving</h2>
            <h3>These are all of our available tracks.</h3>
            <TrackQV 
                startTrackHandler={this.startTrackHandler} />
        </div>
    )
    }
};

export default AllTracks;
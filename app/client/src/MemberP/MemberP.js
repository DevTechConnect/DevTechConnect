import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MemberInfo from '../MemberInfo/MemberInfo';
import Achievement from '../Achievement/Achievement';
import MemTracks from '../MemTracks/MemTracks';

import './MemberP.css';

class MemberP extends Component {
    
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
    
    render() {
        return (
            <div>
                <Navbar 
                    memClickHandler={this.memClickHandler} 
                    trackClickHandler={this.trackClickHandler} 
                    homeClickHandler={this.homeClickHandler} />
                <Sidebar 
                    user={this.props.user} />
                <MemberInfo 
                    user={this.props.user} />
                <p>Hop back in where you left off.</p>
                <button type='button' name='pickUpMemTop' onClick={this.startTrackHandler}>last track name</button>
                <Achievement />
                <Achievement />
                <Achievement />
                <Achievement />
                <Achievement />
                <MemTracks 
                    startTrackHandler={() => this.startTrackHandler()} />
            </div>
        )
    }
};

export default MemberP;
import React, { Component } from 'react';

import NavbarNLI from '../Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Achievement from './Achievement/Achievement';

import './MemberP.css';

class MemberP extends Component {
    constructor {
        super(props);
        this.state = {''};
    }
    return (
        <div>
            <Navbar />
            <h2>Welcome back {props.fName}!</h2>
            <p>Hop back in where you left off.</p>
            <button type='button' name='pickUpMemTop'>{props.lastTrackName}</button>
            <Achievement />
            <Achievement />
            <Achievement />
        </div>
    )
};

export default MemberP;
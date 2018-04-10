import React, { Component } from 'react';

import NavbarNLI from '../Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import RecTracks from './RecTrack/RecTracks';

import './Home.css';

class Home extends Component {
    
    constructor (props) {
        super(props)
        this.state= {''};
    }
    
    return (
        <div>
            <Navbar />
            <h1>DevTech Connect</h1>
            <h2>Keep Moving</h2>
            <Sidebar />
            <RecTracks />
            <RecTrack />
            <RecTrack />
            <RecTrack />
            
        </div>
    )
};

export default Home;
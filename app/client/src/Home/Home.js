import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';

import './Home.css';

class Home extends Component {
    
    constructor (props) {
        super(props)
    }
    render () {
    return (
        <div>
            <Navbar />
            <h1>DevTech Connect</h1>
            <h2>Keep Moving</h2>

            
        </div>
    )
    }
};

export default Home;
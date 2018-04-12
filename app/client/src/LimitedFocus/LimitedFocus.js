import React, { Component } from 'react';

import NavbarNLI from '../Navbar/Navbar';
import LimitedFModule from '../LimitedFModule/LimitedFModule';

import './LimitedFocus.css';

class LimitedFocus extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Limited Focus Test</p>
                <LimitedFModule />
            </div>
        )
    };
};

export default LimitedFocus;
import React, {Component} from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

import './Landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <p>Landing Test</p>
                <Login />
                <Signup />
            </div>
            )
    };
};

export default Landing;
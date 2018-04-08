import React from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';

import './Landing.css';

const Landing = () => {
    return (
        <div>
            <NavbarNLI />
            <p>Landing Test</p>
            <Login />
            <Signup />
        </div>
    )
};

export default Landing;
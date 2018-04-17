import React, { Component } from 'react';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';
import Trial from '../Trial/Trial';
import LimitedFModule from "../LimitedFModule/LimitedFModule";

import './Landing.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginClick: false,
            signupClick: false,
            tryNow: false,
            trialHTML: false
        };
    };

    loginClickHandler = () => {
        const loginClkd = this.state.loginClick;
        this.setState({
            loginClick: !loginClkd,
            signupClick: false,
            trialHTML: false,
            tryNow: false
        });
    };

    signClickHandler = () => {
        const signClkd = this.state.signupClick;
        this.setState({
            signupClick: !signClkd,
            loginClick: false,
            trialHTML: false,
            tryNow: false
        });
    };

    tryNowClickHandler = () => {
        const tryNowClkd = this.state.tryNow;
        this.setState({
            tryNow: !tryNowClkd,
            loginClick: false,
            signupClick: false,
            trialHTML: false
        });
    };

    trialClickHandler = () => {
        const trialClkd = this.state.trialHTML;
        this.setState({
            trialHTML: !trialClkd,
            loginClick: false,
            signupClick: false,
            tryNow: false
        });
    };

    

    render(props) {
        return (
            <div>
                <NavbarNLI
                    loginClick={this.loginClickHandler}
                    signupClick={this.signClickHandler}
                />
                {this.state.tryNow === false && this.state.trialHTML === false ?

                    <div>
                        <h1>
                            DevTech Connect
                        </h1>
                        <h2>
                            Keep Moving
                        </h2>
                        <p>
                            Web development is constantly evolving. Trying to learn a skill that changes faster than bipolar weather can be intimidating - there are resources everywhere. So, where you start? Right <a href='#' onClick={this.tryNowClickHandler}>here</a>.
                        </p>
                        <button type='button' name='getStarted' onClick={this.tryNowClickHandler}>
                            Get Started
                        </button>
                    </div> : null
                }
                {
                this.state.loginClick ?
                    <Login
                        email={this.props.loginEmail}
                        psw={this.props.loginPass}
                        inputUpdate={this.props.handleInputChange}
                        loginSubmit={this.props.handleLoginSubmit}
                    /> : null
                }

                {
                this.state.signupClick ?
                    <Signup
                        fName={this.props.firstName}
                        lName={this.props.lastName}
                        email={this.props.email}
                        email2={this.props.email2}
                        psw={this.props.psw}
                        psw2={this.props.psw2}
                        inputUpdate={this.props.handleInputChange}
                        signupSubmit={this.props.handleSignupSubmit}
                    /> : null
                }
                {
                this.state.tryNow ?
                    <Trial
                        signupClick={this.signClickHandler}
                        htmlTrialClick={this.trialClickHandler}
                        tryNow={this.state.tryNow}
                    /> : null
                }
                {
                this.state.trialHTML ?
                    <LimitedFModule
                        trackName={'HTML/CSS'} /> : null
                }
            </div>
        )
    };
};

export default Landing;

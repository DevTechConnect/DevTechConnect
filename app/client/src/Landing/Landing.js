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
                    tryNow={this.tryNowClickHandler}
                />
                <div className="row">
                    <div className="col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 land-box">
                        {
                        this.state.tryNow === false && this.state.trialHTML === false && this.state.loginClick === false && this.state.signupClick === false ?
                            <div>
                                <h1>
                                    DevTech Connect
                                </h1>
                                <h2>
                                    Keep Moving
                                </h2>
                                <p className='mission-state'>
                                    Web development is constantly evolving. Trying to learn a skill that changes faster than bipolar weather can be intimidating - there are resources everywhere. So, where you start? <br />Right <a href='#' className='call-to-act' onClick={this.tryNowClickHandler}>here</a>.
                                </p>
                                <button type='button' className='get-started' name='getStarted' onClick={this.tryNowClickHandler}>
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
                                loginSubmit={this.props.handleLoginSubmit} /> : null
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
                                signupSubmit={this.props.handleSignupSubmit} /> : null
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
                    <div className="col-0 col-sm-0 col-md-3 col-lg-3 col-xl-3"></div>
                </div>
            </div>
        )
    };
};

export default Landing;

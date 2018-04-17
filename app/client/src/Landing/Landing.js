import React, { Component } from 'react';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';
import Trial from '../Trial/Trial';
import LimitedFModule from "../LimitedFModule/LimitedFModule";
import API from "../utils/API";

import './Landing.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName:'',
            email:'',
            email2:'',
            psw:'',
            psw2:'',
            loginEmail: '',
            loginPass:'',
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

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };


    handleSignupSubmit = (event)  => {
        event.preventDefault();
        alert(`Your signup was successful ${this.state.firstName}!`);
        API.addNewUser({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.psw})
            .then(this.props.setAppState("MemberP"))
            .catch(err => console.log(err));
    
    };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    API.login({username:this.state.loginEmail, password:this.state.loginPass})
      .then(this.props.setAppState("Home"))
      .catch(err => console.log(err));
  };


    render() {
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
                        email={this.state.loginEmail}
                        psw={this.state.loginPass}
                        inputUpdate={this.handleInputChange}
                        loginSubmit={this.handleLoginSubmit}
                    /> : null
                }

                {
                this.state.signupClick ?
                    <Signup
                        fName={this.state.firstName}
                        lName={this.state.lastName}
                        email={this.state.email}
                        email2={this.state.email2}
                        psw={this.state.psw}
                        psw2={this.state.psw2}
                        inputUpdate={this.handleInputChange}
                        signupSubmit={this.handleSignupSubmit}
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

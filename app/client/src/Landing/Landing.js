import React, { Component } from 'react';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';
import API from "../utils/API";

import './Landing.css';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {firstName: '', lastName:'', email:'', email2:'', psw:'', psw2:''},
            loginClick: false,
            signupClick: false
        };
    };
    
    loginClickHandler = () => {
        const loginClkd = this.state.loginClick;
        this.setState({
            loginClick: !loginClkd,
            signupClick: false
        });
    };

    signClickHandler = () => {
        const signClkd = this.state.signupClick;
        this.setState({
            signupClick: !signClkd,
            loginClick: false
        });
    };
    
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState(this.user: {
          [name]: value
        });
    };


    handleSignupSubmit = (event)  => {
        alert(`Your signup was successful ${this.state.user.firstName}!`);
        event.preventDefault();
        API.addNewUser({firstName:this.state.user.firstName, lastName:this.state.user.lastName, email:this.state.user.email, password:this.state.user.psw})
            .catch(err => console.log(err));
    };

    handleLoginSubmit = (event) => {
        alert(`Your login was succesfull ${this.state.user.loginEmail}!`);
        event.preventDefault();
        //the field names MUST be username and password for PassportJS to work
        API.login({username:this.state.user.loginEmail, password:this.state.user.loginPass})
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <NavbarNLI 
                loginClick={this.loginClickHandler}
                signupClick={this.signClickHandler} />
                <h1>DevTech Connect</h1>
                <h2>Keep Moving</h2>
                <p>Web development is constantly evolving. Trying to learn a skill that changes faster than bipolar weather can be intimidating - there are resources everywhere. So, where you start? Righ <a href='#'>here</a>. </p>
                <button type='button' name='getStarted'>Get Started</button>
                {
                this.state.loginClick === true && this.state.signupClick === false ?
                    <Login
                        email={this.state.user.email}
                        psw={this.state.user.psw}
                        inputUpdate={this.handleInputChange}
                        loginSubmit={this.handleLoginSubmit} /> : null
                }
                {
                this.state.signupClick === true && this.state.loginClick === false ?
                    <Signup
                        fName={this.state.user.firstName}
                        lName={this.state.user.lastName}
                        email={this.state.user.email}
                        email2={this.state.user.email2}
                        psw={this.state.user.psw}
                        psw2={this.state.user.psw2}
                        inputUpdate={this.handleInputChange}
                        signupSubmit={this.handleSignupSubmit} /> : null
                }
            </div>
        )
    };
};

export default Landing;

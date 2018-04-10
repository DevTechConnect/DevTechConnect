import React, { Component } from 'react';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';
import API from "../utils/API";

import './Landing.css';

class Landing extends Component {
    
    constructor() {
        super();
        this.state = [{firstName: '', lastName:'', email:'', email2:'', psw:'', psw2:''}];

    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleSignupSubmit = (event)  => {
        alert(`Your signup was successful ${this.state.firstName}!`);
        event.preventDefault();
        API.addNewUser({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.psw})
            .catch(err => console.log(err));
    };

    handleLoginSubmit = (event, firstName) => {
        alert(`Your login was succesfull ${firstName}!`);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <NavbarNLI />
                <h1>DevTech Connect</h1>
                <h2>Keep Moving</h2>
                <p>Web development is constantly evolving. Trying to learn a skill that changes faster than bipolar weather can be intimidating - there are resources everywhere. So, where you start? Righ <a href='#'>here</a>. </p>
                <button type='button' name='getStarted'>Get Started</button>
                <Login 
                    email={this.state.email} 
                    psw={this.state.psw}
                    inputUpdate={this.handleInputChange}
                    loginSubmit={this.handleLoginSubmit} />
                <Signup 
                    fName={this.state.firstName}
                    lName={this.state.lastName}
                    email={this.state.email}
                    email2={this.state.email2}
                    psw={this.state.psw}
                    psw2={this.state.psw2}
                    inputUpdate={this.handleInputChange}
                    signupSubmit={this.handleSignupSubmit} />
            </div>
        )
    };
};

export default Landing;
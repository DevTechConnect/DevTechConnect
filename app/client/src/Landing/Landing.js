import React, { Component } from 'react';

import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NavbarNLI from '../NavbarNLI/NavbarNLI';
import API from "../utils/API";

import './Landing.css';

class Landing extends Component {
    
    constructor(props) {
        super(props);
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
                <p>Landing Test</p>
                <Login 
                    email={this.state.email} 
                    psw={this.state.psw}
                    loginSubmit={this.handleLoginSubmit} />
                <Signup 
                    fName={this.state.firstName}
                    lName={this.state.lastName}
                    email={this.state.email}
                    email2={this.state.email2}
                    psw={this.state.psw}
                    psw2={this.state.psw2}
                    inputUpdate={this.handleInput}
                    signupSubmit={this.handleSignupSubmit} />
            </div>
        )
    };
};

export default Landing;
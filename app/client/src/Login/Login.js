import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = [{email: '', password:''}];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event, firstName) {
        alert(`Your login was succesfull ${firstName}!`);
        event.preventDefault();
    }
    
    render() {
        return (
            <form className='loginBox' onSubmit={this.handleSubmit}>
                <label>Your email:</label>
                    <input type='text' name='loginEmail' value={this.state.email} placeholder='Email Address' />
                <br />
                <label>Your password:</label>
                    <input type='password' name='loginPass' value={this.state.password} placeholder='Password' />
                <br />
                <input type='submit' value='Submit'/>
            </form>
        )
    };
};

export default Login;
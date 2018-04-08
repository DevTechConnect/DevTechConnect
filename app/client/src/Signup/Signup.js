import React, { Component } from 'react';
import './Signup.css';
import API from "../utils/API";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = [{firstName: '', lastName:'', email:'', email2:'', psw:'', psw2:''}];

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

    handleSubmit(event) {
        alert(`Your signup was successful ${this.state.firstName}!`);
        event.preventDefault();
        API.addNewUser({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.psw})
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form className='signupBox' onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleInputChange} placeholder='First Name' />
                <br />
                <label>Last Name:</label>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleInputChange} placeholder='Last Name' />
                <br />
                <label>Email Address:</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleInputChange} placeholder='Email Address' />
                <br />
                <label>Re-Enter Email Address:</label>
                    <input type='text' name='email2' value={this.state.email2} onChange={this.handleInputChange} placeholder='Re-Enter Email Address' />
                <br />
                <label>Password:</label>
                    <input type='password' name='psw' value={this.state.psw} onChange={this.handleInputChange} placeholder='Password' />
                <br />
                <label>Re-Enter Password:</label>
                    <input type='text' name='psw2' value={this.state.psw2} onChange={this.handleInputChange} placeholder='Re-Enter Password' />
                <br />
                <input type='submit' value='Submit'/>
            </form>
        )
    };
};

export default Signup;

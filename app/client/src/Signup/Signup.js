import React, { Component } from 'react';
import './Signup.css';
import API from "../utils/API";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = [{firstName: '', lastName:'', email:'', email2:'', psw:'', psw2:'', zipCode:'', dob: ''}];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(`Your signup was succesfull ${this.state.firstName}!`);
        event.preventDefault();
        //TODO Pass the real information
        API.addNewUser({firstName:"John", lastName:"Smith", email:"js@js.com", password:"abcd"})
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form className='signupBox' onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                    <input type='text' name='fnSignup' value={this.state.firstName} placeholder='First Name' />
                <br />
                <label>Last Name:</label>
                    <input type='text' name='lnSignup' value={this.state.lastName} placeholder='Last Name' />
                <br />
                <label>Email Address:</label>
                    <input type='text' name='signupEmail' value={this.state.email} placeholder='Email Address' />
                <br />
                <label>Re-Enter Email Address:</label>
                    <input type='text' name='signupEmail2' value={this.state.email2} placeholder='Re-Enter Email Address' />
                <br />
                <label>Password:</label>
                    <input type='password' name='signupPass' value={this.state.psw} placeholder='Password' />
                <br />
                <label>Re-Enter Password:</label>
                    <input type='text' name='signupPass2' value={this.state.psw2} placeholder='Re-Enter Password' />
                <br />
                <label>Zip Code:</label>
                    <input type='text' name='SignupZip' value={this.state.zipCode} placeholder='Zip Code' />
                <br />
                <label>Date of Birth:</label>
                    <input type='text' name='signupDOB' value={this.state.dob} placeholder='Date of Birth' />
                <br />
                <input type='submit' value='Submit'/>
            </form>
        )
    };
};

export default Signup;

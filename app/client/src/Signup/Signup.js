import React, { Component } from 'react';
import './Signup.css';
import API from "../utils/API";

const Signup = (props) => {

    return (
        <form className='signupBox' onSubmit={props.signupSubmit}>
            <label>First Name:</label>
                <input type='text' name='firstName' value={props.fName} onChange={this.handleInputChange} placeholder='First Name' />
            <br />
            <label>Last Name:</label>
                <input type='text' name='lastName' value={props.lName} onChange={this.handleInputChange} placeholder='Last Name' />
            <br />
            <label>Email Address:</label>
                <input type='text' name='email' value={props.email} onChange={this.handleInputChange} placeholder='Email Address' />
            <br />
            <label>Re-Enter Email Address:</label>
                <input type='text' name='email2' value={props.email2} onChange={this.handleInputChange} placeholder='Re-Enter Email Address' />
            <br />
            <label>Password:</label>
                <input type='password' name='psw' value={props.psw} onChange={this.handleInputChange} placeholder='Password' />
            <br />
            <label>Re-Enter Password:</label>
                <input type='password' name='psw2' value={props.psw2} onChange={this.handleInputChange} placeholder='Re-Enter Password' />
            <br />
            <input type='submit' value='Submit'/>
        </form>
    )
};

export default Signup;

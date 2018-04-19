import React, { Component } from 'react';
import './Signup.css';
import API from "../utils/API";

const Signup = (props) => {
    

    return (
        <div className="row">
            <div className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
            <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-5">
                <form className='signupBox' onSubmit={props.signupSubmit}>
                    <label>First Name:</label>
                        <input type='text' name='firstName' value={props.fName} onChange={props.inputUpdate} placeholder='First Name' />
                    <br />
                    <label>Last Name:</label>
                        <input type='text' name='lastName' value={props.lName} onChange={props.inputUpdate} placeholder='Last Name' />
                    <br />
                    <label>Email Address:</label>
                        <input type='text' name='email' value={props.email} onChange={props.inputUpdate} placeholder='Email Address' />
                    <br />
                    <label>Re-Enter Email Address:</label>
                        <input type='text' name='email2' value={props.email2} onChange={props.inputUpdate} placeholder='Re-Enter Email Address' />
                    <br />
                    <label>Password:</label>
                        <input type='password' name='psw' value={props.psw} onChange={props.inputUpdate} placeholder='Password' />
                    <br />
                    <label>Re-Enter Password:</label>
                        <input type='password' name='psw2' value={props.psw2} onChange={props.inputUpdate} placeholder='Re-Enter Password' />
                    <br />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
            <div className="col-0 col-sm-2 col-md-3 col-lg-3 col-xl-3"></div>
        </div>
    )
};

export default Signup;

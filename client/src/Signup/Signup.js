import React from 'react';
import './Signup.css';

const Signup = (props) => {
    

    return (
        <div className='signup-box'>
            <form onSubmit={props.signupSubmit}>
                <h2>Please Sign Up</h2>
                <hr />
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
                <input className='trial-btn' type='submit' value='Submit'/>
            </form>
        </div>
    )
};

export default Signup;

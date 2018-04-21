import React, { Component } from 'react';

import './Login.css';

const Login = (props) => {

    return (
        <div className='login-box'>
            <form className='loginBox' onSubmit={props.loginSubmit}>
                <h2>Please log in</h2>
                <hr />
                <label>Your email:</label>
                    <input type='text' name='loginEmail' value={props.email} onChange={props.inputUpdate} placeholder='Email Address' />
                <br />
                <label>Your password:</label>
                    <input type='password' name='loginPass' value={props.psw} onChange={props.inputUpdate} placeholder='Password' />
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
};

export default Login;
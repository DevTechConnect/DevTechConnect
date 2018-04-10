import React, { Component } from 'react';

import './Login.css';

const Login = (props) => {

    return (
        <form className='loginBox' onSubmit={props.loginSubmit}>
            <label>Your email:</label>
                <input type='text' name='loginEmail' value={props.email} onChange={props.inputUpdate} placeholder='Email Address' />
            <br />
            <label>Your password:</label>
                <input type='password' name='loginPass' value={props.psw} onChange={props.inputUpdate} placeholder='Password' />
            <br />
            <input type='submit' value='Submit'/>
        </form>
    )
};

export default Login;
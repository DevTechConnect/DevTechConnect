import React, { Component } from 'react';

import './Login.css';

const Login = (props) => {

    return (
        <div className="row">
            <div className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                <form className='loginBox' onSubmit={props.loginSubmit}>
                    <label>Your email:</label>
                        <input type='text' name='loginEmail' value={props.email} onChange={props.inputUpdate} placeholder='Email Address' />
                    <br />
                    <label>Your password:</label>
                        <input type='password' name='loginPass' value={props.psw} onChange={props.inputUpdate} placeholder='Password' />
                    <br />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
            <div className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
        </div>  
    )
};

export default Login;
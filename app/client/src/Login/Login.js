import React from 'react';

import './Login.css';

const Login = () => {
    
    return (
        <form className='loginBox' onSubmit={this.handleSubmit}>
            <label>Your email:</label>
                <input type='text' name='loginEmail' value="" placeholder='Email Address' />
            <br />
            <label>Your password:</label>
                <input type='password' name='loginPass' value="" placeholder='Password' />
            <br />
            <input type='submit' value='Submit'/>
        </form>
    )
};

export default Login;
import React from 'react';
import './Signup.css';

const Signup = () => {
    
        return (
            <form className='signupBox' onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                    <input type='text' name='fnSignup' value="" placeholder='First Name' />
                <br />
                <label>Last Name:</label>
                    <input type='text' name='lnSignup' value="" placeholder='Last Name' />
                <br />
                <label>Email Address:</label>
                    <input type='text' name='signupEmail' value="" placeholder='Email Address' />
                <br />
                <label>Re-Enter Email Address:</label>
                    <input type='text' name='signupEmail2' value="" placeholder='Re-Enter Email Address' />
                <br />
                <label>Password:</label>
                    <input type='password' name='signupPass' value="" placeholder='Password' />
                <br />
                <label>Re-Enter Password:</label>
                    <input type='text' name='signupPass2' value="" placeholder='Re-Enter Password' />
                <br />
                <label>Zip Code:</label>
                    <input type='text' name='SignupZip' value="" placeholder='Zip Code' />
                <br />
                <label>Date of Birth:</label>
                    <input type='text' name='signupDOB' value="" placeholder='Date of Birth' />
                <br />
                <input type='submit' value='Submit'/>
            </form>
        )
};

export default Signup;
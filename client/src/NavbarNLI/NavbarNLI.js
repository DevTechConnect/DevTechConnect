import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = (props) => {
    return (
        <div className="navbar">
            <nav>
                <Image className='logo-nli' src={require('./logo.png')} width={300} height={81.25} mode='fit' />  
                <ul className='inline'>
                    <li className='nav-item' onClick={props.loginClick}>Log In</li>
                    <li className='nav-item' onClick={props.signupClick}>Sign Up</li>
                    <li className='nav-item' onClick={props.tryNow}>Get Started</li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarNLI;
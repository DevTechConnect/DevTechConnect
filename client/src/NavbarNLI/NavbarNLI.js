import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = (props) => {
    return (
        <div className="navbar row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav>
                    <Image className='logo-nli' src={require('./logo.png')} width={300} height={81.25} mode='fit' />  
                    <ul className='inline'>
                        <li className='nav-item' onClick={props.loginClick}>Log In</li>
                        <li className='nav-item' onClick={props.signupClick}>Sign Up</li>
                        <li className='nav-item' onClick={props.tryNow}>Get Started</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default NavbarNLI;
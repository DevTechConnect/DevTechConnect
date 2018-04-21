import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = (props) => {
    return (
        <div className="row navbar">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav>
                    <Image className='inline logo' src={require('./logo.png')} width={300} height={81.25} mode='fit' />  
                    <ul className='inline'>
                        <li onClick={props.loginClick}>Login</li>
                        <li onClick={props.signupClick}>Sign Up</li>
                        <li onClick={props.tryNow}>Get Started</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default NavbarNLI;
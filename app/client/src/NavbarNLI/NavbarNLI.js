import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = (props) => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={require('./logo.png')} width={300} height={81.25} mode='fit' />  
                <ul className='inline'>
                    <li onClick={props.loginClick}>Login</li>
                    <li onClick={props.signupClick}>Sign Up</li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarNLI;
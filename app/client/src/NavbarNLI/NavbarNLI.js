import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = (props) => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={require('./tempLogo.jpg')} width={150} height={100} mode='fit' />  
                <ul className='inline'>
                    <li onClick={props.loginClick}>Login</li>
                    <li onClick={props.signupClick}>Sign Up</li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarNLI;
import React from 'react';
import Image from '../Image/Image';

import './NavbarNLI.css';

const NavbarNLI = () => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={'../../public/assets/images/tempLogo.jpg'} width={150} height={100} mode='fit' />  
                <ul className='inline'>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </div>
    )
};

export default NavbarNLI;
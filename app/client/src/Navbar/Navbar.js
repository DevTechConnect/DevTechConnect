import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={'../../public/assets/images/tempLogo.jpg'} width={150} height={100} mode='fit' />  
                <ul className='inline'>
                    <li>Member Page</li>
                    <li>Limited Focus Tracks</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;
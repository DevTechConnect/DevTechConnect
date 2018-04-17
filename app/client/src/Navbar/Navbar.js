import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={'../../public/assets/images/tempLogo.jpg'} width={150} height={100} mode='fit' onClick={props.homeClickHandler}/>  
                <ul className='inline'>
                    <li onClick={props.memClickHandler}>Member Page</li>
                    <li onClick={props.trackClickHandler}>Limited Focus Tracks</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;
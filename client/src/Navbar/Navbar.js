import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <nav>
                <Image className='logo' src={require('./logo.png')} width={300} height={81.25} mode='fit' onClick={props.homeClickHandler}/>  
                <ul>
                    <li className='nav-item-li' onClick={props.homeClickHandler}>Home</li>
                    <li className='nav-item-li' onClick={props.memClickHandler}>Member Page</li>
                    <li className='nav-item-li' onClick={props.trackClickHandler}>Limited Focus Tracks</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;

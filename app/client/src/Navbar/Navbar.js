import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <Image className='inline logo' src={require('./logo.png')} width={300} height={81.25} mode='fit' onClick={props.homeClickHandler}/>  
                <ul className='inline'>
                    <li onClick={props.homeClickHandler}>Home</li>
                    <li onClick={props.memClickHandler}>Member Page</li>
                    <li onClick={props.trackClickHandler}>Limited Focus Tracks</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;

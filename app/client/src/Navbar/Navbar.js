import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="row navbar">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav>
                    <Image src={require('./logo.png')} width={300} height={81.25} mode='fit' onClick={props.homeClickHandler}/>  
                    <ul>
                        <li className='nav-item' onClick={props.homeClickHandler}>Home</li>
                        <li className='nav-item' onClick={props.memClickHandler}>Member Page</li>
                        <li className='nav-item' onClick={props.trackClickHandler}>Limited Focus Tracks</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;

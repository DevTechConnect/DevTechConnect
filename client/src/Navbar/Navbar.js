import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav>
                    <Image className='logo' src={require('./logo.png')} width={300} height={81.25} mode='fit' onClick={props.homeClickHandler}/>  
                    <ul>
                        <li className='nav-item-li' onClick={props.homeClickHandler}>Home</li>
                        <li className='nav-item-li' onClick={props.memClickHandler}>Member Page</li>
                        <li className='nav-item-li' onClick={props.resourceClickHandler}>Resources and Tracks</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;

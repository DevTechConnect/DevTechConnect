import React from 'react';
import Image from '../Image/Image';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav>
                    <Image src={require('./logo.png')} width={300} height={81.25} mode='fit' onClick={props.homeClickHandler}/>  
                    <ul>
                        <li onClick={props.homeClickHandler}>Home</li>
                        <li onClick={props.memClickHandler}>Member Page</li>
                        <li onClick={props.trackClickHandler}>Limited Focus Tracks</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;

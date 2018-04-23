import React from 'react';

import './Link.css';

const Link = (props) => {
    return (
        <div>
            <a className='link text-link' target='_blank' href={props.link}>{props.link}</a>
        </div>
    )
};

export default Link;
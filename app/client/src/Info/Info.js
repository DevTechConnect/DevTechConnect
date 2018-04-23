import React from 'react';

import './Info.css';

const Info = (props) => {
    return (
        <div>
            <p classname='text-descr'>{props.info}</p>
        </div>
    )
};

export default Info;
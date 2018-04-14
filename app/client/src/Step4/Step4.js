import React from 'react';
import Iframe from 'react-iframe';

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step4.css';

const Step4 = () => {
    return (
        <div>
            <h2>Step4</h2>
            <TextOpt />
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
            <Duration />
            <Info />
        </div>
    )
};

export default Step4;
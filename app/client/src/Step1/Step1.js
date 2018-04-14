import React from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step1.css';

const Step1 = () => {
    return (
        <div>
            <h2>Step1</h2>
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

export default Step1;
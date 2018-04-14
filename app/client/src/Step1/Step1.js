import React from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';

import './Step1.css';

const Step1 = () => {
    return (
        <div>
            <p>Step1</p>
            <TextOpt />
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
        </div>
    )
};

export default Step1;
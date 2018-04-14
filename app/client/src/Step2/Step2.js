import React from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';

import './Step2.css';

const Step2 = () => {
    return (
        <div>
            <p>Step2</p>
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

export default Step2;
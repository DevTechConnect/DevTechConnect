import React from 'react';
import Iframe from 'react-iframe'

import TextDef from '../TextDef/TextDef'


import './LangDef.css';

const LangDef = () => {
    return (
        <div>
            <h1 className='content-header'>What is [Track Name]?</h1>
            <hr />
            <div className='content-box'>
                <TextDef />
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                        width="300"
                        height="250px"
                        id="myId"
                        className="iframe"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
            </div>
        </div>
    )
};

export default LangDef;
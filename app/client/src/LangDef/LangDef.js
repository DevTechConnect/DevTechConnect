import React from 'react';
import Iframe from 'react-iframe'

import TextComp from '../TextComp/TextComp'


import './LangDef.css';

const LangDef = () => {
    return (
        <div>
            <h1>LangDefTitle</h1>
            <TextComp />
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

export default LangDef;
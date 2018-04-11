import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Steps from './Steps/Steps';

import './LimitedFModule.css';

const LimitedFModule = () => {
    return (
        <div>
            <h2>Welcome to your {props.selTrackName} learning track.</h2>
            <p>Follow along and check off each step you complete to track of your progress. Most importantly, don't skip the practice; practice will be your quickest teacher in code. We'll give you achievements along the way - you can find those on your <a href='#'>Member Page</a>. 
            <p>We're' happy you're here. Stick around, and like always, keep moving.</p>
            <div>
                <Steps />
                <Route exact path="/Step1" component={Step1} />
                <Route exact path="/Step2" component={Step1} />
                <Route exact path="/Step3" component={Step3} />
                <Route exact path="/Step4" component={Step4} />
                <Route exact path="/Practice" component={Step4} />
                <Route exact path="/NextTrack" component={Step4} />
            </div>
        </div>
    )
};

export default LimitedFModule;
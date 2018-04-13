import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Steps from '../Steps/Steps';
import LangDef from '../LangDef/LangDef';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step4 from '../Step4/Step4';
import Practice from '../Practice/Practice';
import RelTrack from '../RelTrack/RelTrack';


import './LimitedFModule.css';

class LimitedFModule extends Component {
    
    state = {
        startClick: false,
        trackName: 'HTML/CSS',
    };

    startClickHandler = () => {
        const startClkd = this.state.startClick;
        this.setState({startClick: !startClkd});
    }
    
    trackNameHandler = () => {
        let selectedTrack = 'HTML/CSS';
        this.setState({trackName: selectedTrack})
    }

    render () {
        return (
            <div>
            {
            this.state.startClick === false ?
                <div>
                    <h2>
                        Welcome to your {this.state.trackName} learning track.
                    </h2>
                    <p>
                        Follow along and check off each step you complete to track of your progress. Most importantly, don/'t skip the practice; practice will be your quickest teacher in code. We will give you achievements along the way - you can find those on your <a href="#">Member Page</a>. 
                    </p>
                    <p>
                        We're' happy you're here. Stick around, and like always, keep moving.
                    </p>
                    <button type='button' name='startButton' onClick={this.startClickHandler}>
                        Start Track 
                    </button>
                </div> : null
            }
            {
                this.state.startClick ?
                <Router>
                    <div>
                        <Steps />
                            <Route exact path="/LangDef" component={LangDef} />
                            <Route exact path="/Step1" component={Step1} />
                            <Route exact path="/Step2" component={Step2} />
                            <Route exact path="/Step3" component={Step3} />
                            <Route exact path="/Step4" component={Step4} />
                            <Route exact path="/Practice" component={Practice} />
                            <Route exact path="/RelTrack" component={RelTrack} />
                    </div>
                </Router> : null
            }
            </div>
        )
    }
};

export default LimitedFModule;



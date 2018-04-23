import React, { Component } from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step1.css';

class Step1 extends Component {
    
    state={
        allTracks: this.props.allTracks
    }
    
    render() {
        return (
            <div>
                <h2>Your First Step</h2>
                <hr />
                <div className='content-box'>
                    <TextOpt 
                        allTracks={this.state.allTracks}
                        stepNum={0} />
                    <div className='vid-holder'>
                        <Iframe url={this.state.allTracks[this.props.trackId].steps[1].stepLink}
                                width="420px"
                                height="250px"
                                id="myId"
                                className="iframe-step"
                                display="initial"
                                position="relative"
                                allowFullScreen
                                />
                        <br />
                        {this.state.allTracks[this.props.trackId].steps[1].stepdescription}
                    </div>
                </div>
            </div>
        )
    }
};

export default Step1;
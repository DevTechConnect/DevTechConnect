import React, { Component } from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step4.css';

class Step4 extends Component {
    
    state={
        allTracks: this.props.allTracks
    }
    
    render() {
        return (
            <div>
                <h2>Your Final Step</h2>
                <hr />
                {
                this.props.allTracks ?
                    <div className='content-box'>
                        <TextOpt 
                            allTracks={this.props.allTracks}
                            stepNum={6} />
                        <div className='vid-holder'>
                            <Iframe url={this.props.allTracks[this.props.trackId].steps[7].stepLink.replace('watch', 'embed')}
                                    width="420px"
                                    height="250px"
                                    id="myId"
                                    className="iframe-step"
                                    display="initial"
                                    position="relative"
                                    allowFullScreen/>
                            <br />
                            <a href={this.props.allTracks[this.props.trackId].trackIntroVideoLink}>URL: {this.props.allTracks[this.props.trackId].trackIntroVideoLink}</a>
                            <br />
                            {this.props.allTracks[this.props.trackId].steps[7].stepdescription}
                        </div>
                    </div> : null
                }
            </div>
        )
    }
};

export default Step4;
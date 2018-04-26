import React, { Component } from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step3.css';

class Step3 extends Component {


    render() {
        return (
            <div>
                <h2>Your Third Step</h2>
                <hr />
                {
                this.props.allTracks ?
                    <div className='content-box'>
                        <TextOpt 
                            allTracks={this.props.allTracks}
                            stepNum={4} />
                        <div className='vid-holder'>
                            <Iframe url={this.props.allTracks[this.props.trackId].steps[5].stepLink.replace('watch', 'embed')}
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
                            {this.props.allTracks[this.props.trackId].steps[5].stepdescription}
                        </div>
                    </div> : null
                }
            </div>
        )
    }
};

export default Step3;

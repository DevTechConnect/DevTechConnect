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
                {
                this.props.allTracks ?
                    <div>
                        <h1 className='content-header'>Your Third Step</h1>
                            <div className='content-box'>
                                <h2 className='opt-header'>Text Lesson</h2>
                                <TextOpt 
                                    allTracks={this.props.allTracks}
                                    stepNum={4} 
                                    trackId={this.props.trackId} />
                                <hr />
                                <div className='vid-holder'>
                                    <h2 className='opt-header'>Video Lesson</h2>
                                    <Iframe url={this.props.allTracks[this.props.trackId].steps[5].stepLink.replace('watch', 'embed')}
                                            width="420px"
                                            height="250px"
                                            id="myId"
                                            className="iframe"
                                            display="initial"
                                            position="relative"
                                            allowFullScreen/>
                                    <br />
                                    <a className='article-link' href={this.props.allTracks[this.props.trackId].trackIntroVideoLink}>URL: {this.props.allTracks[this.props.trackId].trackIntroVideoLink}</a>
                                    <br />
                                    {this.props.allTracks[this.props.trackId].steps[5].stepdescription}
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
        )
    }
};

export default Step3;

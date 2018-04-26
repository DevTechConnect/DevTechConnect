import React, { Component } from 'react';
import Iframe from 'react-iframe'

import TextOpt from '../TextOpt/TextOpt';
import Duration from '../Duration/Duration';
import Info from '../Info/Info';

import './Step1.css';

class Step1 extends Component {

    render() {
        return (
            <div>
                <h1 className='content-header'>Your First Step</h1>
                <hr />
                {
                this.props.allTracks ?
                    <div className='content-box'>
                        <TextOpt 
                            allTracks={this.props.allTracks}
                            stepNum={0} />
                        <div className='vid-holder'>
                            <Iframe url={this.props.allTracks[this.props.trackId].trackIntroVideoLink.replace('watch', 'embed')}
                                    width="420px"
                                    height="250px"
                                    id="myId"
                                    className="iframe-step"
                                    display="initial"
                                    position="relative"
                                    allowFullScreen
                                    />
                            <br />
                            <a className='article-link' href={this.props.allTracks[this.props.trackId].trackIntroVideoLink}>URL: {this.props.allTracks[this.props.trackId].trackIntroVideoLink}</a>
                            <br />
                            {this.props.allTracks[this.props.trackId].steps[1].stepdescription}
                        </div>
                    </div> : null
                }
            </div>
        )
    }
};

export default Step1;

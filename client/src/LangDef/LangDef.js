import React, { Component } from 'react';
import Iframe from 'react-iframe'

import TextDef from '../TextDef/TextDef'


import './LangDef.css';

class LangDef extends Component {

    state={
            allTracks: this.props.allTracks,
        }

    render() {

        console.log(this.state.allTracks)

        return (
            <div>
                <h1 className='content-header'>What is {this.state.allTracks[this.props.trackId].trackName}?</h1>
                <hr />
                <div className='content-box'>
                    <TextDef
                        allTracks={this.state.allTracks }
                        trackId={this.props.trackId} />
                    <Iframe url={this.state.allTracks[this.props.trackId].trackIntroVideoLink}
                            width="480px"
                            height="250px"
                            id="myId"
                            className="iframe"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                </div>
            </div>
        )
    }
};

export default LangDef;

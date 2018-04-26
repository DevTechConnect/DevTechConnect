import React, { Component } from 'react';
import Iframe from 'react-iframe';


import TextDef from '../TextDef/TextDef'


import './LangDef.css';

class LangDef extends Component {


    render() {


        return (
            <div>
                {
                this.props.allTracks ?
                    <div>
                        <h1 className='content-header'>What is {this.props.allTracks[this.props.trackId].trackName}?</h1>

                            <div className='content-box'>
                                <h2 className='opt-header'>Text Explanation</h2>
                                <TextDef 
                                    allTracks={this.props.allTracks } 
                                    trackId={this.props.trackId} />
                                <hr />
                                <div className='vid-holder'>
                                    <h2 className='opt-header'>Video Explanation</h2>
                                    <Iframe url={this.props.allTracks[this.props.trackId].trackIntroVideoLink.replace('watch', 'embed')}
                                            width="420px"
                                            height="250px"
                                            id="myId"
                                            className="iframe"
                                            display="initial"
                                            position="relative"
                                            allowFullScreen/>
                                    <br />
                                    <a className='article-link' href={this.props.allTracks[this.props.trackId].trackIntroVideoLink}>URL: {this.props.allTracks[this.props.trackId].trackIntroVideoLink}</a>
                                </div> 
                            </div>
                    </div> : null
                }
            </div>
        )
    }
};

export default LangDef;

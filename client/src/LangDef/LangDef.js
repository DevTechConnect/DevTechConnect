import React, { Component } from 'react';
import Iframe from 'react-iframe';


import TextDef from '../TextDef/TextDef'


import './LangDef.css';

class LangDef extends Component {


    render() {


        return (
            <div>
                <h1 className='content-header'>What is {this.props.allTracks[this.props.trackId].trackName}?</h1>
                <hr />
                {
                this.props.allTracks ?
                    <div className='content-box'>
                        <TextDef 
                            allTracks={this.props.allTracks } 
                            trackId={this.props.trackId} />
                        <div className='vid-holder'>
                            <Iframe url={this.props.allTracks[this.props.trackId].trackIntroVideoLink.replace('watch', 'embed')}
                                    width="480px"
                                    height="250px"
                                    id="myId"
                                    className="iframe"
                                    display="initial"
                                    position="relative"
                                    allowFullScreen/>
                            <br />
                            <a href={this.props.allTracks[this.props.trackId].trackIntroVideoLink}>URL: {this.props.allTracks[this.props.trackId].trackIntroVideoLink}</a>
                        </div> 
                    </div> : null
                }
            </div>
        )
    }
};

export default LangDef;

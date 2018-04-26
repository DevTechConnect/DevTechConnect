import React, { Component } from 'react';

import Link from '../Link/Link';
import Info from '../Info/Info';

import './TextOpt.css';

class TextOpt extends Component {
    
    state={
        allTracks: this.props.allTracks
    }
    
    render() {
        return (
            <div className='text-opt'>
                <a className='text-link' target='_blank' href={this.state.allTracks[0].steps[this.props.stepNum].stepLink}>{this.state.allTracks[0].steps[this.props.stepNum].stepLink}</a>
                <p className='text-descr'>{this.state.allTracks[0].steps[this.props.stepNum].stepdescription}</p>
            </div>
        )
    }
};

export default TextOpt;
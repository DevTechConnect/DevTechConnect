import React, { Component } from 'react';

import './TextDef.css';

class TextDef extends Component {
    
    state={allTracks: this.props.allTracks}
    
    render() {
        return (
            <div className='text-def'>
                <p>{this.state.allTracks[this.props.trackId].trackDescription}</p>
            </div>
        )
    }
};

export default TextDef;
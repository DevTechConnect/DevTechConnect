import React, { Component } from 'react';

import './GlosTermComp.css';

class GlosTermComp extends Component {
    render() {
        return (
            <div>
            {
            this.props ?
                <div>
                    <p className='glos-term'>{this.props.term}</p>
                    <p className='glos-def'>{this.props.def}</p>
                    <hr />
                </div> : null
            }
            </div>
        )
    }
};

export default GlosTermComp;
import React, { Component } from 'react';

import Image from '../Image/Image';

import './Achievement.css';

class Achievement extends Component {
    render() {
        return (
            <div className="inline-block">
                <Image className='inline' src={require(`./${1}.png`)} width={75} height={75} mode='fit' />
            </div>
        )
    }
}
        
export default Achievement;
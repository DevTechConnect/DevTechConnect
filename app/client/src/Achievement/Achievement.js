import React from 'react';

import Image from '../Image/Image';

import './Achievement.css';

const Achievement = () => {
    return (
        <div className="inline-block">
            <Image className='inline' src={require('./html_css_gold_seal.png')} width={75} height={75} mode='fit' />
        </div>
    )
}
        
export default Achievement;
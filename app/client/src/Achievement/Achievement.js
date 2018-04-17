import React from 'react';

import Image from '../Image/Image';

import './Achievement.css';

const Achievement = () => {
    return (
        <div>
            <Image className='inline' src={require('./html_css_gold_seal.png')} width={100} height={100} mode='fit' />
        </div>
    )
}
        
export default Achievement;
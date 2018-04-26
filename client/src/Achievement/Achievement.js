import React from 'react';

import Image from '../Image/Image';

import './Achievement.css';

const Achievement = (props) =>   {
        return (
            <div className="inline-block">
            {
            props.trackId ? 
                <div>
                    <Image src={require(`./${props.trackId}.png`)} width={75} height={75}  />
                </div> : null
            }
            </div>
        )
}
        
export default Achievement;
import React from 'react';

import './TextOpt.css';

const TextOpt = (props) => {

        return (
            <div>
                {
                props.allTracks ?
                    <div className='text-opt'>
                        <a className='text-link' target='_blank' href={props.allTracks[props.trackId].steps[props.stepNum].stepLink}>{props.allTracks[props.trackId].steps[props.stepNum].stepLink}</a>
                        <p className='text-descr'>{props.allTracks[props.trackId].steps[props.stepNum].stepdescription}</p>
                    </div> : null
                }
            </div>
        )
};

export default TextOpt;
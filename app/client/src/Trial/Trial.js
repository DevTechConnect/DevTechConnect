import React from 'react';

import './Trial.css';

const Trial = (props) => {
    return (
        <div>
            <h1>
                Welcome to DevTech Connect. <br />We are happy you're here.
            </h1>
            <hr />
            <p>
                Once you sign up, you will not only have access to our large resource library, you will also have access to our limited focus learning tracks. We know learning code isn't quick or easy. That's why we regularly scour the net for the most useful links, then we put them in an order to help you learn in a more organized fashion. At the end of each track is a practice area with links to more resources to help you, well, practice.
            </p>
            <p>
                Still not sure? Try our HTML/CSS track free. If you like it, there's plenty more where that came from.
            </p>
            <button type='button' className='trial-btn' name='signupTrial' onClick={props.signupClick}>
                    Sign Up
            </button>
            <button type='button' className='trial-btn' name='htmlTrial' onClick={props.htmlTrialClick}>
                    Try Our HTML Track
            </button>
        </div>
    )
};

export default Trial;
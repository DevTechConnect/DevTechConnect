import React from 'react';

import Link from '../Link/Link';
import Info from '../Info/Info';
import Type from '../Type/Type';
import Duration from '../Duration/Duration';

import './Practice.css';



const Practice = () => {
        
    return (
        <div>
            <h2>Practice</h2>
        <Link />
            <Info /> 
            <Type /> 
            <Duration />
        </div>
    )
};

export default Practice;
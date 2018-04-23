import React from 'react';

import './Article.css';

const Article = (props) => {
    return (
        <ul>
            <li>
                <a className='article-link' href={props.link} target='_blank'>{props.artName}</a>
            </li>
        </ul>
    )
}
        
export default Article;
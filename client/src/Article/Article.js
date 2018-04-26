import React from 'react';

import './Article.css';

const Article = (props) => {
    return (
        <div className='article-holder'>
            <a className='article-link' href={props.link} target='_blank'>{props.artName}</a>
            {
            props.descr ?
                <p>{props.descr}</p> : null
            }
        </div>
    )
}
        
export default Article;
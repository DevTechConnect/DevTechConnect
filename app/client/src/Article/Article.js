import React from 'react';

import './Article.css';

const Article = (props) => {
    return (
        <a className='article-link inline-block' href='#'>{props.artName}</a>
    )
}
        
export default Article;
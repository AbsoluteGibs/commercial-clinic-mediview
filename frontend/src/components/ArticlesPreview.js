import React from 'react'
import {Link} from 'react-router-dom'

function ArticlesPreview({article})
{
    return(
        <div className="article_panel">
            <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <div>{article.dateOfPublish}</div>
                <div>{article.shortDesc}</div>
            </Link>
        </div>
    )
}

export default ArticlesPreview
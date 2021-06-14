import React from 'react'
import {Link} from 'react-router-dom'

function ArticlesPreview({article})
{
    return(
        <div className="article_panel">
            <Link className='no_text_decor' to={`/articles/${article.name}`}>
                <div>
                    <div style={{maxWidth: '200px', display: 'inline-block', paddingRight: '20px'}}>
                        <img style={{borderRadius: '12px', maxWidth: '100%', maxHeight: '100%'}} src={require(`../images/${article.thumbnail}`)} alt={article.name}/>
                        {console.log(article.thumbnail)}
                    </div>
                    <div style={{maxWidth: '800px', display: 'inline-block', margin: '0'}}>
                        <h3 style={{paddingBottom: '30px', paddingTop: '30px'}}>{article.title}</h3>
                        Published Date: {article.dateOfPublish}<br/>
                        {article.shortDesc}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticlesPreview
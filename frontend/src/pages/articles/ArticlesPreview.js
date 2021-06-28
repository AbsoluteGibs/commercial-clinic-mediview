import React from 'react'
import {Link} from 'react-router-dom'
import './Articles.css'

function ArticlesPreview({name, thumbnail, title, shortDesc})
{
    return(
        <div>
            <Link className="no_text_decor" to={`/articles/${name}`}>
                <div className="article_panel box-shadow flex-container">
                    <div className="image-container">
                        <img src={require(`../../images/${thumbnail}`)} alt={name}/>
                        {/* {console.log(thumbnail)} */}
                    </div>
                    <div className="text-container">
                        <h3>{title}</h3>
                        <br/>
                        {/* Published Date: {dateOfPublish}<br/> */}
                        {shortDesc}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticlesPreview
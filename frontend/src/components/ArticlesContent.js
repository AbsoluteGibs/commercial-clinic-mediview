import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ArticlePreview from './ArticlesPreview'

// TO-DO: Create database of articles - date published, author, content.
// Articles are self-written

// TO-DO advanced: create middlewares

function Articles(){
    const [articlesDB, setArticlesDB] = useState([])

    const hook = () => {
        axios.get('http://localhost:3001/articlesDatabase')
        .then((response) => {
            setArticlesDB(response.data)
            console.log(response.data)
        })
    }

    useEffect(hook, [])

    return(
        <div className="content_body animated fadeInRight">
            <h1 style={{paddingBottom: '50px'}}>Articles</h1>
            {articlesDB.map(article => <div key={article.id} className="article_panel_container"><div><ArticlePreview article={article}/></div></div>)}
        </div>
    );
}

export default Articles;
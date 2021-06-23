import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import ArticlePreview from './ArticlesPreview'
import ArticlesDB from './ArticlesDB'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './Articles.css'

// TO-DO: Create database of articles - date published, author, content.
// Articles are self-written

// TO-DO advanced: create middlewares

function Articles(){
    const [articlesDB, setArticlesDB] = useState([])

    const hook = () => {
        setArticlesDB(ArticlesDB)
    }

    useEffect(hook, [])

    return(
        <div className="content_body animated fadeInRight">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Articles Page</title>
                    <meta name="description" content="Medisave Clinic and Surgery written articles"/>
                </Helmet>
                <h1 style={{paddingBottom: '50px'}}>Articles</h1>
                {articlesDB.map(article => <div key={article.id} className="article_panel_container"><div><ArticlePreview article={article}/></div></div>)}
            </HelmetProvider>
        </div>
    );
}

export default Articles;

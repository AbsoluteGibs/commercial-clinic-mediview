import React, {lazy, Suspense, useState, useEffect} from 'react'
// import axios from 'axios'
// import ArticlePreview from './ArticlesPreview'
import ArticlesDB from './ArticlesDB'
import { Helmet } from 'react-helmet-async'

import './Articles.css'

const ArticlePreview = lazy(() => import('./ArticlesPreview'))

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
            <Helmet>
                <title>Articles | Mediview Clinic & Surgery</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="List of articles written from Mediview Clinic"/>
            </Helmet>
            <h1 style={{paddingBottom: '50px'}}>Articles</h1>
            {
                articlesDB.map(article => 
                <div key={article.id} className="article_panel_container">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ArticlePreview
                        name={article.name}
                        thumbnail={article.thumbnail}
                        title={article.title}
                        shortDesc={article.shortDesc}/>
                    </Suspense>
                </div>)
            }
        </div>
    );
}

export default Articles;

/*
 * commercial-clinic-mediview
 * Home Page: Articles section
*/

import React from 'react'
import ArticleCard from '../../../components/card/ArticleCard'
import ArticlesDB from '../../../components/ArticlesDB'

import './ArticlesSection.css'

/**
 * ArticlesSection component renders the articles section of the HomePage form ArticlesDB
 *
 * @param {object} props Component props.
 * @param {number} [props.maxArticles=4] Max no. of articles to show.
*/
export default function ArticlesSection({maxArticles = 4}) {
    // limit articles shown to maximum specified
    const shownArticles = ArticlesDB.slice(0, Math.min(ArticlesDB.length, maxArticles));
        
    // formats dates in format DD-MM-YY into DD/MM/YYYY for rendering
    const formatDate = (inDateStr) => {
        const [day, month, year] = inDateStr.split("-");
        return `${day}/${month}/20${year}`;
    }
        
    return (
        <section id="articles">
            <h1>Latest Articles</h1>
            <div className="deck">
                {
                    shownArticles.map((a) => <ArticleCard
                        title={a.title}
                        publishedAt={formatDate(a.dateOfPublish)}
                        description={a.shortDesc}
                        ctaTitle="Read More"
                        ctaTo={`/articles/${a.name}`}
                    />)
                }
            </div>
        </section>
    )
}

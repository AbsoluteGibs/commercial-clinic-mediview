/*
 * commercial-clinic-mediview
 * Home Page: Articles section
*/

import React from 'react'
import ArticleCard from '../../../components/card/ArticleCard'
import ArticlesDB from '../../articles/ArticlesDB'

import './ArticlesSection.css'

/**
 * ArticlesSection component renders the articles section of the HomePage form ArticlesDB
 *
 * @param {object} props Component props.
 * @param {number} [props.maxArticles=3] Max no. of latest (by id) articles to show.
*/
export default function ArticlesSection({maxArticles = 3}) {
    const shownArticles = ArticlesDB
        // sort by descending id to show latest articles first
        .sort((a1, a2) => a1.id <= a2.id)
        // limit articles shown to maximum specified
        .slice(0, Math.min(ArticlesDB.length, maxArticles));

    // formats dates in format DD-MM-YY into DD/MM/YYYY for rendering
    // const formatDate = (inDateStr) => {
    //     const [day, month, year] = inDateStr.split("-");
    //     return `${day}/${month}/20${year}`;
    // }

    return (
        <section id="articles">
            <h1>Latest Articles</h1>
            <div className="deck">
                {
                    shownArticles.map((a) => <ArticleCard
                        key={a.title}
                        title={a.title}
                        // publishedAt={formatDate(a.dateOfPublish)}
                        description={a.shortDesc}
                        ctaTitle="Get Informed"
                        ctaTo={`/articles/${a.name}`}
                    />)
                }
            </div>
        </section>
    )
}

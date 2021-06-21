/*
 * commercial-clinic-mediview
 * Home Page: Articles section
*/

import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ArticleCard from '../../../components/card/ArticleCard'
import {ARTICLES_URL} from '../../../components/ArticlesContent'

import './Articles.css'

/**
 * ArticlesSection component renders the articles section of the HomePage.
 *
 * @param {object} props Component props.
 * @param {number} [props.maxArticles=4] Max no. of articles to show.
*/
export default function ArticlesSection({maxArticles = 4}) {
    const [articles, setArticles] = useState([]);
    
    // retrieve article data from json server
    useEffect(() => {
        axios.get(ARTICLES_URL)
            .then((response) => setArticles(response.data))
            // log error on failure to retrieve article data
            .catch((e) =>  console.error(e))
    });
        
    // limit articles shown to maximum specified
    const shownArticles = articles.slice(0, Math.min(articles.length, maxArticles))
        
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

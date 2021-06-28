/*
 * commercial-clinic-mediview
 * Article Card UI Component
*/

import React from 'react'
import {Link} from 'react-router-dom'

import './ArticleCard.css'
import '../Button.css'

/**
 * Renders the ArticleCard UI element for displaying the latest articles on the homepage.
 *
 * @param {Object} props Component props for rendering.
 * @param {string} props.title Title of the article.
 * @param {Date} props.publishedAt Date that the article was published.
 * @param {string} props.description Short description of the article.
 * @param {string} props.ctaTitle Title of the call to action button.
 * @param {string} props.ctaTo URL to navigate to if the call to action button is clicked.
*/
export default function ArticleCard(props) {
    return (
        <div className="article-card box-shadow">
            <div className="header">
                <h2>{props.title}</h2>
                {/* <span className="published-date">{props.publishedAt}</span> */}
            </div>
            <p className="describe">
                {props.description}
            </p>
            <Link className="button" to={props.ctaTo}>{props.ctaTitle}</Link>
        </div>
    );
}

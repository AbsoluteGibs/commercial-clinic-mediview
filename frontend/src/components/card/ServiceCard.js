/*
 * commercial-clinic-mediview
 * Service Card UI Component
*/

import React from 'react'
import {Link} from 'react-router-dom'


import './ServiceCard.css'
import '../Button.css'

/**
 * Renders a Service Card URL element with header, description and call to action.
 *
 * @param {Object} props Card component props.
 * @param {string} props.title Title to show in the cards header.
 * @param {string} props.backgroundSrc URL to an image to show as a background in the header.
 * @param {string} props.children Child components / elements to show in the body of the card.
 * @param {string} props.ctaTitle Title of the call to action button.
 * @param {string} props.ctaTo URL to navigate to if the call to action button is clicked.
*/

export default function ServiceCard(props) {
    return (
        <div className="service-card">
            <div className="header">
                <div className="image-container">
                    <img className="blur dim" src={props.backgroundSrc} alt="background" />
                </div>
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="body">
                {props.children}
            </div>
            <Link className="button" to={props.ctaTo}>{props.ctaTitle}</Link>
        </div>
    )
}


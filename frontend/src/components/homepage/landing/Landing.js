/*
 * commercial-clinic-mediview
 * Home Page: Landing Section
*/

import React from 'react'
import {Link} from 'react-router-dom'
import {SERVICE_SECTION_ID} from '../services/Services'

import HeroImage from '../../../images/home_page_landing_hero@1x.png'
import './Landing.css'

/**
 * Landing component renders the landing section on the homepage
*/
export default function Landing() {
    return (
        <section id="landing">
            <div className="pitch">
                <h1>Trusted, Professional, Quality, Healthcare.</h1>
                <p>
                    Mediview Clinic & Surgery is a trusted medical clinic that
                    provides quality and professional healthcare to you and your
                    family since 1994.
                </p>
                <Link className="cta-button" to={`/#${SERVICE_SECTION_ID}`}>View Services</Link>
            </div>
            <img className="hero" src={HeroImage} />
        </section>
    )
}

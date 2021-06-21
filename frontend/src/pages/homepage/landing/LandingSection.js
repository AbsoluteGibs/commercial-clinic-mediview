/*
 * commercial-clinic-mediview
 * Home Page: Landing Section
*/

import React from 'react'
import {HashLink} from 'react-router-hash-link'
import {SERVICE_SECTION_ID} from '../services/ServicesSection'

import HeroImage from '../../../images/home_page_landing_hero@1x.png'
import './LandingSection.css'
import '../../../components/Button.css'

/**
 * LandingSection component renders the landing page section on the HomePage
*/
export default function LandingSection() {
    return (
        <section id="landing">
            <div className="pitch">
                <h1>Trusted, Professional, Quality, Healthcare.</h1>
                <p>
                    Mediview Clinic & Surgery is a trusted medical clinic that
                    provides quality and professional healthcare to you and your
                    family since 1994.
                </p>
                <HashLink className="button" smooth to={`/#${SERVICE_SECTION_ID}`}>View Services</HashLink>
            </div>
            <img alt="homepage" className="hero" src={HeroImage} />
        </section>
    )
}

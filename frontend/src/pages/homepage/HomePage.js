/*
 * commercial-clinic-mediview
 * Home Page
*/

import React from 'react'
import LandingSection from './landing/LandingSection'
import ServicesSection from './services/ServicesSection'
import ArticlesSection from './articles/ArticlesSection'
import { Helmet } from 'react-helmet-async'

import './HomePage.css'

/**
 * Renders the Home Page for the Mediview website.
*/
export default function HomePage() {
    return (
        <section className="animated fadeInRight" id="homepage">
            <Helmet>
                <title>Homepage | Mediview Clinic & Surgery</title>
                <meta charSet="utf-8"/>
                <meta name="description" content="Mediview Clinic & Surgery is a trusted medical clinic in Singapore that provides quality and professional healthcare to you and your family since 1994."/>
            </Helmet>
            <LandingSection />
            <ServicesSection />
            <ArticlesSection />
        </section>
    )
}

/*
 * commercial-clinic-mediview
 * Home Page
*/

import React from 'react'
import LandingSection from './landing/Landing'
import ServicesSection from './services/Services'
import ArticlesSection from './articles/Articles'

import './HomePage.css'

/**
 * Renders the Home Page for the Mediview website.
*/
export default function HomePage() {
    return (
        <section id="homepage">
            <LandingSection />
            <ServicesSection />
            <ArticlesSection />
        </section>
    )
}

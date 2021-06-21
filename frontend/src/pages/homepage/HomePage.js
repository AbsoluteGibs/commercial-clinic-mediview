/*
 * commercial-clinic-mediview
 * Home Page
*/

import React from 'react'
import LandingSection from './landing/LandingSection'
import ServicesSection from './services/ServicesSection'
import ArticlesSection from './articles/ArticlesSection'

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

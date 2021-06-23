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
            </Helmet>
            <LandingSection />
            <ServicesSection />
            <ArticlesSection />
        </section>
    )
}

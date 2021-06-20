/*
 * commercial-clinic-mediview
 * Home Page: Services section
*/


import React from 'react'
import ServiceCard from '../../../components/card/ServiceCard'
import ScreeningBackground from '../../../images/home_page_services_screening_bg@1x.png'
import TestingBackground from '../../../images/home_page_services_testing_bg@1x.png'
import VaccineBackground from '../../../images/home_page_services_vaccine_bg@1x.png'

import './Services.css'

/**
 * id assigned to the rendered {@link Service} component
 * @constant {string} 
*/
export const SERVICE_SECTION_ID = "services";

/**
 * ServicesSection component renders the services section on the HomePage
*/
export default function ServicesSection() {
    return (
        <section id={SERVICE_SECTION_ID}>
            <h1>Our Services</h1>
            
            <div className="card-deck">
                <ServiceCard 
                    title="Health Screening"
                    backgroundSrc={ScreeningBackground}
                    ctaTitle="Learn More"
                    ctaTo="/health-screening">
                    <p> Health screening is essential for early detection of diseases and conditions.  </p>
                    <p> Mediview provides affordable & tailored health screening packages. </p>
                </ServiceCard>
                <ServiceCard 
                    title="COVID-19 Testing"
                    backgroundSrc={TestingBackground}
                    ctaTitle="Learn More"
                    ctaTo="/covid-services">
                    <p>Pre-event testing is required for large scale events such as trade shows and weddings.</p>
                    <p>Mediview provides ART tests for events and PCR tests individuals going overseas.</p>
                </ServiceCard>
                <ServiceCard 
                    title="Sinopac Vaccine"
                    backgroundSrc={VaccineBackground}
                    ctaTitle="Learn More"
                    ctaTo="/covid-services">
                    <p>Protect yourself and your loved ones from COVID-19 by getting vaccinated.</p>
                    <p>Mediview provides COVID-19 vaccination via the Sinopac Vaccine.</p>
                </ServiceCard>
            </div>
        </section>
    )
}

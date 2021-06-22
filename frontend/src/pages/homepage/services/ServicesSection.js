/*
 * commercial-clinic-mediview
 * Home Page: Services section
*/


import React from 'react'
import ServiceCard from '../../../components/card/ServiceCard'
import ScreeningBackground from '../../../images/consultationroom.JPG'
import TestingBackground from '../../../images/swab_test.jpg'
import VaccineBackground from '../../../images/sinovac2.JPG'
import KneeBackground from '../../../images/knee2.jpg'
import LPABackground from '../../../images/lpa.jpg'

import './ServicesSection.css'

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
                    <p>Mediview provides ART tests for events and PCR tests for individuals going overseas.</p>
                </ServiceCard>
                <ServiceCard
                    title="Sinovac Vaccine"
                    backgroundSrc={VaccineBackground}
                    ctaTitle="Learn More"
                    ctaTo="/sinovac-advisory">
                    <p>Protect yourself and your loved ones from COVID-19 by getting vaccinated.</p>
                    <p>Mediview provides COVID-19 vaccination via the Sinovac Vaccine.</p>
                </ServiceCard>
                <ServiceCard
                    title="Knee Osteoarthritis"
                    backgroundSrc={KneeBackground}
                    ctaTitle="Learn More"
                    ctaTo="/knee-osteoarthritis">
                    <p>Knee arthritis is a common form of arthritis that affects millions globally.</p>
                    <p>Read more to get informed about knee arthritis .This service is available at our clinic.</p>
                </ServiceCard>
                <ServiceCard
                    title="Lasting Power of Attorney"
                    backgroundSrc={LPABackground}
                    ctaTitle="Learn More"
                    ctaTo="/lasting-power-of-attorney">
                    <p>A Lasting Power of Attorney (LPA) is a legal document that is important for patients who may lose the ability to think for themselves.</p>
                    <p>It may happen when you least expect it. Learn more about LPA here.</p>
                </ServiceCard>
            </div>
        </section>
    )
}

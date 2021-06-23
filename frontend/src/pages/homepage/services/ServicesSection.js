/*
 * commercial-clinic-mediview
 * Home Page: Services section
*/


import React from 'react'
import ServiceCard from '../../../components/card/ServiceCard'
import ScreeningBackground from '../../../images/consultationroom.JPG'
import TestingBackground from '../../../images/swab_test.jpg'
import VaccineBackground from '../../../images/sinovac2.JPG'
import KneeBackground from '../../../images/knee.jpg'
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
                    shortDesc="Health screening is essential for early detection of diseases and conditions. Mediview provides affordable & tailored health screening packages." 
                    backgroundSrc={ScreeningBackground}
                    ctaTitle="Check Service"
                    ctaTo="/health-screening">
                    <p> Health screening is essential for early detection of diseases and conditions.  </p>
                    <p> Mediview Clinic provides affordable & tailored health screening packages. </p>
                </ServiceCard>
                <ServiceCard
                    title="COVID-19 Testing"
                    shortDesc="Pre-event testing is required for large scale events such as trade shows and weddings. Mediview Clinic provides ART tests for events and PCR tests for individuals going overseas."
                    backgroundSrc={TestingBackground}
                    ctaTitle="Check Service"
                    ctaTo="/covid-services">
                    <p>Pre-event testing is required for large scale events such as trade shows and weddings.</p>
                    <p>Mediview Clinic provides ART tests for events and PCR tests for individuals going overseas.</p>
                </ServiceCard>
                <ServiceCard
                    title="Sinovac Vaccine"
                    shortDesc="Protect yourself and your loved ones from COVID-19 by getting vaccinated. Mediview Clinic provides COVID-19 vaccination via the Sinovac Vaccine."
                    backgroundSrc={VaccineBackground}
                    ctaTitle="Check Service"
                    ctaTo="/sinovac-advisory">
                    <p>Protect yourself and your loved ones from COVID-19 by getting vaccinated.</p>
                    <p>Mediview Clinic provides COVID-19 vaccination via the Sinovac Vaccine.</p>
                </ServiceCard>
                <ServiceCard
                    title="Knee Osteoarthritis"
                    shortDesc="Knee arthritis is a common form of arthritis that affects millions globally."
                    backgroundSrc={KneeBackground}
                    ctaTitle="Check Service"
                    ctaTo="/articles/knee-osteoarthritis">
                    <p>Knee arthritis is a common form of arthritis that affects millions globally.</p>
                    <p>Read more to get informed about knee arthritis. This service is available at Mediview Clinic.</p>
                </ServiceCard>
                <ServiceCard
                    title="Lasting Power of Attorney"
                    shortDesc="A Lasting Power of Attorney (LPA) is a legal document that is important for patients who may lose the ability to think for themselves."
                    backgroundSrc={LPABackground}
                    ctaTitle="Check Service"
                    ctaTo="/articles/lasting-power-of-attorney">
                    <p>A Lasting Power of Attorney (LPA) is a legal document that is important for patients who may lose the ability to think for themselves.</p>
                    <p>Learn more about LPA here.</p>
                </ServiceCard>
            </div>
        </section>
    )
}

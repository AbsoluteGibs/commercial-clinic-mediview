import React from 'react'
import Accordion from './Accordion';
//import ReactDOMServer from 'react-dom/server'
import ARTIndividual from './AccordionContent/ARTIndividual'
import PCRSwabTest from './AccordionContent/PCRSwabTest'
import PreEventART from './AccordionContent/PreEventART'
import ARTWeddings from './AccordionContent/ARTWeddings'
import {Helmet, HelmetProvider} from 'react-helmet-async'

function CovidServices()
{
    return(
        <div className="content_body animated fadeInRight" id="primary">
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>COVID-19 Services</title>
                    <meta name="description" content="COVID-19 services and tests provided by Medisave Clinic, especially for specific high count events (etc. Public performance)"/>
                </Helmet>
                <h1 style={{paddingBottom: '50px'}}>COVID-19 Services</h1>
                <Accordion title="Pre-Departure PCR Swab Test" content={<PCRSwabTest/>}/>
                <Accordion title="ART Test for Individuals" content={<ARTIndividual/>} />
                <Accordion title="Pre-Event ART" content={<PreEventART/>} />
                <Accordion title="ART for Weddings" content={<ARTWeddings/>} />
                <div className="top-padding-50"/><div className="top-padding-50"/>
            </HelmetProvider>
        </div>
    );
}

export default CovidServices;
import React from 'react'
import Accordion from './Accordion';
//import ReactDOMServer from 'react-dom/server'
import ARTIndividual from './ARTIndividual'
import PCRSwabTest from './PCRSwabTest'
import PreEventART from './PreEventART'
import ARTWeddings from './ARTWeddings'

function CovidServices()
{
    return(
        <div className="content_body animated fadeInRight" id="primary">
            <h1 style={{paddingBottom: '50px'}}>COVID-19 Services</h1>
            <Accordion title="Pre-Departure PCR Swab Test" content={<PCRSwabTest/>}/>
            <Accordion title="ART Test for Individuals" content={<ARTIndividual/>} />
            <Accordion title="Pre-Event ART" content={<PreEventART/>} />
            <Accordion title="ART for Weddings" content={<ARTWeddings/>} />
        </div>
    );
}

export default CovidServices;
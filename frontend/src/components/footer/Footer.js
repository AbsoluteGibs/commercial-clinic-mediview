/*
 * commercial-clinic-mediview
 * Home Page
*/

import React from 'react'
import {Link} from 'react-router-dom'

import MediviewIcon  from '../../images/mediview_icon_small@1x.png'
import './Footer.css'

/**
 * Renders a Footer with a sitemap, address, contact, hours info.
 * For use at the end of each page of the site
*/

export default function Footer() {
    return (
        <footer>
            <section className="sitemap">
                <div className="header">
                    <img src={MediviewIcon} alt="Mediview Icon" />
                    <h3>Mediview Clinic & Surgery</h3>
                </div>

                <p>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/covid-services">COVID Services</Link>
                    <Link to="/health-screening">Screening</Link>
                </p>
            </section>
            
            <section className="address">
                <h4>Address</h4>
                <p>
                    Block 150 Lorong 1 Toa Payoh,
                    #01-999, Singapore 310150
                </p>
            </section>
            
            <section className="contact">
                <h4>Contact</h4>
                <p>
                    mediviewacc@gmail.com <br/>
                    +65 6253-2351
                </p>
            </section>
            
            
            <section className="consult-hours">
                <h4>Consultation Hours</h4>
                <div>
                    Monday, Tuesday	
                    <ul>
                        <li>8.30am - 12.30pm</li>
                        <li>2.00pm - 4.00pm</li>
                        <li>7.00pm - 9.00pm</li>
                    </ul>
                    Wednesday, Thursday, Friday	
                    <ul>
                        <li>8.30am - 12.30pm</li>
                        <li>2.00pm - 5.00pm</li>
                    </ul>
                    Saturday
                    <ul>
                        <li>8.30am - 12.30pm</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

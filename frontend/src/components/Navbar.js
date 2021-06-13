import React from 'react'
import '../navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){

    function updatenav()
    {

    }

    return(
        <div>
            <nav id='navbar'>
                <input type='checkbox' id='responsive-navbar'/><label></label>
                <ul>
                    <li><Link to='/articles' onClick={updatenav}>Articles</Link></li>
                    <li><Link to='/about-us' onClick={updatenav}>About Us</Link></li>
                    <li><Link to='/contact-us' onClick={updatenav}>Contact Us</Link></li>
                    <li><Link to='/covid-services' onClick={updatenav}>COVID-19 Services</Link></li>
                    <li><Link to='/health-screening' onClick={updatenav}>Health Screening Packages</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
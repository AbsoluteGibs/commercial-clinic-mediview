import React, {useState} from 'react'
import '../navbar.css'
import {Link} from 'react-router-dom'

/**
 * Defines a Navigation Item shown in a Navbar that navigates to the given URL when clicked.
 *
 * @param props
 * @param {string} props.to target URL to navigate to.
 * @param {function} props.onClick callback called on click event.
 * @param {function} children child components to render in navbar.
 *
 */
function Navitem(props) {
    return (
        <li className="nav-item">
            <Link to={props.to} onClick={props.onClick}>{props.children}</Link>
        </li>
    );
}

/**
 * Represents a Navbar that allows the user to navigate across the page
 */
function Navbar(_props) {
    // showNavbar: whether to show the navbar in mobile screens <= 800px
    const [navbarShown, setNavbarShown] = useState(true);

    // toggle the Navbar between showing and hiding in mobile screens < 800px.
    const toggleNavbar = () => {
        setNavbarShown(
            // always shows the Navbar if on a viewport larger than 800px.
            (window.innerHeight > 800) ? true : !navbarShown
        );
    }
    return (
        <div>
            <nav id='navbar'>
                {/* see navbar.css to understand how navbar is toggled by checkbox */}
                <input type='checkbox' id='responsive-navbar' onClick={toggleNavbar} checked={navbarShown}/><label></label>
                <ul>
                    <Navitem to='/articles' onClick={toggleNavbar}>Articles</Navitem>
                    <Navitem to='/about-us' onClick={toggleNavbar}>About Us</Navitem>
                    <Navitem to='/contact-us' onClick={toggleNavbar}>Contact Us</Navitem>
                    <Navitem to='/covid-services' onClick={toggleNavbar}>COVID-19 Services</Navitem>
                    <Navitem to='/health-screening' onClick={toggleNavbar}>Health Screening Packages</Navitem>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

import React from 'react'
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
        <li class="nav-item">
            <Link to={props.to} onClick={props.onClick}>{props.children}</Link>
        </li>
    );
}

/**
 * Represents a Navbar that allows the user to navigate across the page
 */
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            // whether to show the navbar in mobile screens <= 800px
            showNavbar: true,
        }
        // explicitly bind 'this' in order to use 'this' in callback
        this.toggle = this.toggle.bind(this);
    }

    /**
     * Toggles the Navbar between showing and hiding in mobile screens < 800px.
     * Always shows the Navbar if on a viewport larger than 800px.
     */
    toggle() {
        this.setState({
            showNavbar: (window.innerHeight > 800) ? true : !this.state.showNavbar
        })
    }

    render() {
        return (
            <div>
                <nav id='navbar'>
                    {/* see navbar.css to understand how navbar is toggled by checkbox */}
                    <input type='checkbox' id='responsive-navbar' onClick={this.toggle} checked={this.state.showNavbar}/><label></label>
                    <ul>
                        <Navitem to='/articles' onClick={this.toggle}>Articles</Navitem>
                        <Navitem to='/about-us' onClick={this.toggle}>About Us</Navitem>
                        <Navitem to='/contact-us' onClick={this.toggle}>Contact Us</Navitem>
                        <Navitem to='/covid-services' onClick={this.toggle}>COVID-19 Services</Navitem>
                        <Navitem to='/health-screening' onClick={this.toggle}>Health Screening Packages</Navitem>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;

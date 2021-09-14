import React from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/navbar/Navbar'
import Logo from './components/Logo'
import SinovacFloatingButton from './components/SinovacFloatingButton'
import SinopharmFloatingButton from './components/SinopharmFloatingButton'
import Footer from './components/footer/Footer'

import About from './pages/about_us/About'
import Article from './pages/articles/Article'
import Articles from './pages/articles/ArticlesContent'
import ContactUs from './pages/contact_us/ContactUs'
import CovidServices from './pages/covid_services/CovidServices'
import HealthScreening from './pages/health_screening/HealthScreening'
import SinovacAdvisory from './pages/SinovacAdvisory'
import SinopharmAdvisory from './pages/SinopharmAdvisory'
import HomePage from './pages/homepage/HomePage'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import ErrorPage from './components/ErrorPage'

function App() {
    return (
        <div id="root">
            <HelmetProvider>
                <Router>
                    <header>
                        <div className="logo-container-top">
                            <div className="logo-container">
                                <Logo/>
                            </div>
                        </div>
                        <Navbar/>
                    </header>

                    <ScrollToTop/>

                    <main>
                        {/* Where content is generated depending on page clicked, aka website body */}
                        <Switch>
                            <Route path="/articles" exact component={Articles}/>
                            <Route path="/articles/:fullArticle" exact component={Article}/>
                            <Route path="/about-us" exact component={About}/>
                            <Route path="/contact-us" exact component={ContactUs}/>
                            <Route path="/covid-services" exact component={CovidServices}/>
                            <Route path="/health-screening" exact component={HealthScreening}/>
                            <Route path="/sinovac-advisory" exact component={SinovacAdvisory}/>
                            <Route path="/sinopharm-advisory" exact component={SinopharmAdvisory}/>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="*" component={ErrorPage} />
                        </Switch>
                    </main>
                    <SinovacFloatingButton/>
                    <SinopharmFloatingButton/>
                    <Footer />
                </Router>
            </HelmetProvider>
        </div>
    );
}

export default App

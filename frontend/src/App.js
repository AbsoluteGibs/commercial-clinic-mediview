import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './components/Logo'


import About from './components/About'
import Article from './components/Article'
import Articles from './components/ArticlesContent'
import ContactUs from './components/ContactUs'
import CovidServices from './components/CovidServices'
import HealthScreening from './components/HealthScreening'
<<<<<<< HEAD
import SinovacAdvisory from './components/SinovacAdvisory'
=======
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'
>>>>>>> c11caef1284cfdb006ee81c9ff2db56381cfb17a

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div id="root">
            <Router>
                <header>
                    {/* might wanna incorporate logo into navbar */}
                    <div className="logo-container-top">
                        <div className="logo-container">
                            <Logo/>
                        </div>
                    </div>
                    <Navbar/>
                </header>

                <main>
                    {/* Where content is generated depending on page clicked, aka website body */}
                    <Switch>
                        <Route path="/articles" exact component={Articles}/>
                        <Route path="/articles/:fullArticle" component={Article}/>
                        <Route path="/about-us" exact component={About}/>
                        <Route path="/contact-us" exact component={ContactUs}/>
                        <Route path="/covid-services" exact component={CovidServices}/>
                        <Route path="/health-screening" exact component={HealthScreening}/>
                        <Route path="/" exact component={HomePage}/>
                    </Switch>
                </main>
                
                <Footer />
            </Router>
        </div>
<<<<<<< HEAD
        <Navbar/>
        <header className="App-header">
          <div>
            {/* Where content is generated depending on page clicked, aka website body */}
            <Switch>
              <Route path="/articles" exact component={Articles}/>
              <Route path="/articles/:fullArticle" component={Article}/>
              <Route path="/about-us" exact component={About}/>
              <Route path="/contact-us" exact component={ContactUs}/>
              <Route path="/covid-services" exact component={CovidServices}/>
              <Route path="/health-screening" exact component={HealthScreening}/>
              <Route path="/sinovac-advisory" exact component={SinovacAdvisory}/>
            </Switch>
          </div>
        </header>
      </Router>
    </div>
  );
=======
    );
>>>>>>> c11caef1284cfdb006ee81c9ff2db56381cfb17a
}

export default App

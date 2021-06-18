import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './components/Logo'

import Articles from './components/ArticlesContent'
import Article from './components/Article'
import About from './components/About'
import ContactUs from './components/ContactUs'
import CovidServices from './components/CovidServices'
import HealthScreening from './components/HealthScreening'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        {/* might wanna incorporate logo into navbar */}
        <div className="logo-container-top">
          <div className="logo-container">
            <Logo/>
          </div>
        </div>
        <Navbar/>
        <header className="App-header">
          <div>
            {/* Where content is generated depending on page clicked, aka website body */}
            <Switch>
              <Route path="/articles" exact component={Articles}/>
              <Route path={"/articles/:fullArticle"} component={Article}/>
              <Route path="/about-us" exact component={About}/>
              <Route path="/contact-us" exact component={ContactUs}/>
              <Route path="/covid-services" exact component={CovidServices}/>
              <Route path="/health-screening" exact component={HealthScreening}/>
            </Switch>
          </div>
        </header>
      </Router>
    </div>
  );
}

export default App
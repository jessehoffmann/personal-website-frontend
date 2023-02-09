import React, { Component } from 'react'

//import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

//Styles
import './static/css/styles.css'

class App extends Component {
    render() {
        return (
            <Router>
                {/*
            <div style={{backgroundImage: `url(${Landscape})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            */}
                <div>
                    <Header />

                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/resume">
                            <Resume />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App

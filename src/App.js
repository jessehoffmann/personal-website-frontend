import React, { Component } from 'react';
//import logo from './static/logo.svg';
//import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Styles
import './static/css/portfolio_style.css';

class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <NavBar />

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    {
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    }
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                
                <Footer />
            </div>
        </Router>
        );
    }
}

export default App;

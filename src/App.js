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
import NavBar from './components/NavBar';

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
                    <Route path="/users">
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <footer>
                        <p class="footer-text">Jesse Thomas Hoffmann</p>
                        <br />
                        <p class="footer-text-two">Software Developer</p>
                        <p class="footer-text-three">California REALTOR®</p>
                </footer>
            </div>
        </Router>
        );
    }
}

export default App;

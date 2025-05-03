import React, { Component } from 'react'

//import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/resume' element={<Resume />} />
                        <Route path='/' element={<Home />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App

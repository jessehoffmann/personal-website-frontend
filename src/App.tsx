import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Skills from './components/Skills';

// components
import Header from './components/Header';
import Footer from './components/Footer';

//Styles
import './static/css/styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    {/* <Route path='/resume' element={<Resume />} /> */}
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App; 
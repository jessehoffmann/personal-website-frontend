import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
// import Resume from './components/Resume';
import Skills from './components/Skills'
import Experience from './components/Experience'

// components
import Header from './components/Header'
import Footer from './components/Footer'
import DocumentMeta from './components/DocumentMeta'

//Styles
import './static/css/styles.css'

const App: React.FC = () => {
    return (
        <Router>
            <DocumentMeta />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Header />
                <Box sx={{ flex: '1 0 auto' }}>
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/experience' element={<Experience />} />
                        <Route path='/contact' element={<Contact />} />
                        {/* <Route path='/resume' element={<Resume />} /> */}
                        <Route path='/' element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    )
}

export default App

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Assets
import Monogram from '../../static/img/monogram.png'
import MobileMenu from './MobileMenu'
import { MonogramImage } from './styled'

const Header = () => {
    const [scrolling, setScrolling] = useState(false)
    const [windowDimension, setWindowDimension] = useState(null)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const offset = window.scrollY
        setScrolling(offset > 0)
    }

    const isMobile = windowDimension <= 640

    return (
        <div>
            <header className={scrolling ? 'sticky' : null}>
                <div className="center-header">
                    <Link to="/">
                        <MonogramImage src={Monogram} />
                    </Link>
                    <h1 className="header-title">Jesse Thomas Hoffmann</h1>

                    {isMobile ? (
                        <MobileMenu />
                    ) : (
                        <>
                            <h3 className="header-links">
                                <Link to="/about">About</Link>
                            </h3>
                            <h3 className="header-links">
                                <Link to="/contact">Contact</Link>
                            </h3>
                        </>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header

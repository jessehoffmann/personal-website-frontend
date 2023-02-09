import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//Assets
import Monogram from '../../static/img/monogram.png'
import { MonogramImage } from './styled'

const Header = () => {
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        const offset = window.scrollY
        setScrolling(offset > 0)
    }

    return (
        <div>
            <header className={scrolling ? 'sticky' : null}>
                <div className="center-header">
                    <Link to="/">
                        <MonogramImage src={Monogram} />
                    </Link>
                    <h1 className="header-title">Jesse Thomas Hoffmann</h1>

                    <h3 className="header-links">
                        <Link to="/about">About</Link>
                    </h3>
                    <h3 className="header-links">
                        <Link to="/contact">Contact</Link>
                    </h3>
                </div>
            </header>
        </div>
    )
}

export default Header

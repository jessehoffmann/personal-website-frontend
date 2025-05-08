import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

//Assets
import Monogram from '../../static/img/monogram.png'
import MobileMenu from './MobileMenu'
import { MonogramImage, StickyHeader } from './styled'

const Header: React.FC = () => {
    const [scrolling, setScrolling] = useState<boolean>(false)
    const [windowDimension, setWindowDimension] = useState<number | null>(null)

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

    const handleScroll = (): void => {
        const offset = window.scrollY
        setScrolling(offset > 0)
    }

    const isMobile = windowDimension && windowDimension <= 640

    return (
        <div>
            <StickyHeader scrolling={scrolling}>
                <div className='center-header'>
                    <Link to='/'>
                        <MonogramImage src={Monogram} alt='Monogram' />
                    </Link>
                    <h1 className='header-title'>Jesse Thomas Hoffmann</h1>

                    {isMobile ? (
                        <MobileMenu />
                    ) : (
                        <>
                            <h3 className='header-links'>
                                <Link to='/about'>About</Link>
                            </h3>
                            <h3 className='header-links'>
                                <Link to='/skills'>Skills</Link>
                            </h3>
                            <h3 className='header-links'>
                                <Link to='/contact'>Contact</Link>
                            </h3>
                        </>
                    )}
                </div>
            </StickyHeader>
        </div>
    )
}

export default Header

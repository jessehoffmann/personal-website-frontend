import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router'

//Assets
import Monogram from '../../static/img/monogram.png'
import MobileMenu from './MobileMenu'
import { 
    MonogramImage, 
    StickyHeader, 
    HeaderContent, 
    HeaderTitle, 
    HeaderLinks 
} from './styled'
import { ButtonBase } from '@mui/material'
import { debounce } from 'lodash'

const SCROLL_THRESHOLD = 10

const Header: React.FC = () => {
    const [scrolling, setScrolling] = useState<boolean>(false)
    const [windowDimension, setWindowDimension] = useState<number | null>(null)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    const handleResize = useCallback(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    const handleScroll = useCallback(() => {
        const offset = window.scrollY
        setScrolling(offset > SCROLL_THRESHOLD)
    }, [])

    const debouncedScroll = useCallback(
        debounce(handleScroll, 100),
        [handleScroll]
    )

    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll)
        return () => window.removeEventListener('scroll', debouncedScroll)
    }, [debouncedScroll])

    const isMobile = windowDimension && windowDimension <= 720

    return (
        <StickyHeader scrolling={scrolling}>
            <HeaderContent>
                <ButtonBase sx={{ ml: { xs: 0, md: '20px' }, mt: '4px' }}>
                    <Link to='/'>
                        <MonogramImage src={Monogram} alt='Monogram' />
                    </Link>
                </ButtonBase>

                <HeaderTitle>Jesse Thomas Hoffmann</HeaderTitle>

                {isMobile ? (
                    <MobileMenu />
                ) : (
                    <>
                        <HeaderLinks>
                            <Link to='/about'>About</Link>
                        </HeaderLinks>
                        <HeaderLinks>
                            <Link to='/skills'>Skills</Link>
                        </HeaderLinks>
                        <HeaderLinks>
                            <Link to='/contact'>Contact</Link>
                        </HeaderLinks>
                    </>
                )}
            </HeaderContent>
        </StickyHeader>
    )
}

export default Header

import React, { useEffect, useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router'
import { useTheme } from '@mui/material/styles'

//Assets
import Logo from '../../static/img/jth-logo-circle.png'
import MobileMenu from './MobileMenu'
import {
    Brand,
    BrandLink,
    HeaderContent,
    HeaderLinkList,
    HeaderLinks,
    HeaderNav,
    HeaderTitle,
    mobileNavMaxWidthPx,
    MonogramImage,
    StickyHeader,
} from './styled'

const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Experience', to: '/experience' },
    { label: 'Skills', to: '/skills' },
    { label: 'Contact', to: '/contact' },
]

const Header: React.FC = () => {
    const theme = useTheme()
    const location = useLocation()
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

    const isMobile =
        windowDimension !== null && windowDimension <= mobileNavMaxWidthPx

    return (
        <StickyHeader>
            <HeaderContent>
                <Brand>
                    <BrandLink to='/' $hoverColor={theme.palette.primary.light}>
                        <MonogramImage src={Logo} alt='' />
                        <HeaderTitle $color={theme.palette.primary.main}>
                            Jesse Thomas Hoffmann
                        </HeaderTitle>
                    </BrandLink>
                </Brand>

                {isMobile ? (
                    <MobileMenu />
                ) : (
                    <HeaderNav aria-label='Primary'>
                        <HeaderLinkList>
                            {navLinks.map((item) => {
                                const active = location.pathname === item.to
                                return (
                                    <HeaderLinks key={item.to}>
                                        <Link
                                            to={item.to}
                                            aria-current={
                                                active ? 'page' : undefined
                                            }
                                            style={
                                                active
                                                    ? {
                                                          fontWeight: 600,
                                                          borderBottom: `2px solid ${theme.palette.primary.main}`,
                                                      }
                                                    : undefined
                                            }
                                        >
                                            {item.label}
                                        </Link>
                                    </HeaderLinks>
                                )
                            })}
                        </HeaderLinkList>
                    </HeaderNav>
                )}
            </HeaderContent>
        </StickyHeader>
    )
}

export default Header

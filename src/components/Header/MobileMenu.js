import React, { useEffect, useState } from 'react'
import { MenuButton, MenuImage, MenuList, MenuListItem } from './styled'
import MenuIcon from '../../static/img/menu.svg'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const MobileMenu = () => {
    const containerRef = useRef(null)
    const [openMenu, setMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('scroll', handleMouseDown)

        return () => {
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('scroll', handleMouseDown)
        }
    }, [])

    const handleMouseDown = (event) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target)
        ) {
            setMenuOpen(false)
        }
    }

    const handleClick = () => {
        setMenuOpen(!openMenu)
    }

    return (
        <div ref={containerRef} style={{ display: 'relative' }}>
            <MenuButton onClick={handleClick}>
                <MenuImage src={MenuIcon} />
            </MenuButton>
            <MenuList visible={openMenu}>
                <MenuListItem>
                    <Link to='/about' onClick={handleClick}>
                        About
                    </Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to='/contact' onClick={handleClick}>
                        Contact
                    </Link>
                </MenuListItem>
            </MenuList>
        </div>
    )
}

export default MobileMenu

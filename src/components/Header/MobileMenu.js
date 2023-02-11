import React, { useState } from 'react'
import { MenuButton, MenuImage, MenuList, MenuListItem } from './styled'
import MenuIcon from '../../static/img/menu.png'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
    const [openMenu, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!openMenu)
    }

    return (
        <div style={{ display: 'relative' }}>
            <MenuButton onClick={handleClick}>
                <MenuImage src={MenuIcon} />
            </MenuButton>
            <MenuList visible={openMenu}>
                <MenuListItem>
                    <Link to="/about" onClick={handleClick}>
                        About
                    </Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to="/contact" onClick={handleClick}>
                        Contact
                    </Link>
                </MenuListItem>
            </MenuList>
        </div>
    )
}

export default MobileMenu

import { useState } from 'react'
import { MenuButton, MenuImage } from './styled'
import MenuIcon from '../../static/img/menu.svg'
import { Link } from 'react-router'
import { useRef } from 'react'
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ChecklistIcon from '@mui/icons-material/Checklist'
import MailIcon from '@mui/icons-material/Mail'

const menuData = [
    {
        text: 'About',
        link: '/about',
        icon: <AccountBoxIcon />,
    },
    {
        text: 'Skills',
        link: '/skills',
        icon: <ChecklistIcon />,
    },
    {
        text: 'Contact',
        link: '/contact',
        icon: <MailIcon />,
    },
]

const MobileMenu = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [openMenu, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen((open) => !open)
    }

    return (
        <div ref={containerRef} style={{ display: 'relative' }}>
            <MenuButton onClick={handleClick}>
                <MenuImage src={MenuIcon} />
            </MenuButton>
            <Drawer open={openMenu} anchor='right' onClose={handleClick}>
                <Box
                    sx={{ width: 180 }}
                    role='presentation'
                    onClick={handleClick}
                >
                    <List>
                        {menuData.map(({ text, link, icon }) => (
                            <ListItem
                                key={text}
                                disablePadding
                                sx={{ '& .MuiListItemButton-root': { p: 3 } }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText
                                        primary={<Link to={link}>{text}</Link>}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default MobileMenu

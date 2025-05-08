import { useState } from 'react'
import { MenuButton, MenuImage } from './styled'
import MenuIcon from '../../static/img/menu.svg'
import { useLocation, useNavigate } from 'react-router'
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
import HomeIcon from '@mui/icons-material/Home'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ChecklistIcon from '@mui/icons-material/Checklist'
import MailIcon from '@mui/icons-material/Mail'

const menuData = [
    {
        text: 'Home',
        link: '/',
        icon: <HomeIcon />,
    },
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
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)
    const handleClick = (open: boolean, link?: string) => {
        if (link) navigate(link)
        setMenuOpen(open)
    }

    return (
        <div ref={containerRef} style={{ display: 'relative' }}>
            <MenuButton onClick={() => handleClick(true)}>
                <MenuImage src={MenuIcon} />
            </MenuButton>
            <Drawer
                open={openMenu}
                anchor='right'
                onClose={() => handleClick(false)}
            >
                <Box sx={{ width: 180 }} role='presentation'>
                    <List>
                        {menuData.map(({ text, link, icon }) => (
                            <ListItem
                                key={text}
                                disablePadding
                                sx={{
                                    '& .MuiListItemButton-root': { p: 3 },
                                    backgroundColor:
                                        link === location.pathname
                                            ? 'gainsboro'
                                            : 'transparent',
                                }}
                                onClick={() => handleClick(false, link)}
                            >
                                <ListItemButton>
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText primary={text} />
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

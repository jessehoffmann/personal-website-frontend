import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { MenuButton, mobileHeaderHeightPx } from './styled'

const navItems = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Experience', to: '/experience' },
    { text: 'Skills', to: '/skills' },
    { text: 'Contact', to: '/contact' },
]

const secondaryLinks = [
    {
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jessehoffmann/',
    },
    {
        text: 'GitHub',
        href: 'https://github.com/jessehoffmann',
    },
]

const MobileMenu = () => {
    const theme = useTheme()
    const location = useLocation()
    const [openMenu, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)
    const accentTint = alpha(theme.palette.primary.main, 0.12)
    const accentHover = alpha(theme.palette.primary.main, 0.08)

    return (
        <>
            <MenuButton
                onClick={() => setMenuOpen(true)}
                aria-label='Open menu'
            >
                <MenuIcon />
            </MenuButton>
            <Drawer
                open={openMenu}
                anchor='right'
                onClose={closeMenu}
                slotProps={{
                    paper: {
                        'aria-labelledby': 'mobile-menu-title',
                        sx: { width: 'min(80vw, 320px)' },
                    },
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        px: 2,
                        pb: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            height: mobileHeaderHeightPx,
                            boxSizing: 'border-box',
                            flexShrink: 0,
                            pl: 0.5,
                        }}
                    >
                        <Typography
                            id='mobile-menu-title'
                            variant='overline'
                            component='p'
                            sx={{ color: 'text.secondary', m: 0 }}
                        >
                            Menu
                        </Typography>
                        <IconButton
                            aria-label='Close menu'
                            onClick={closeMenu}
                            sx={{ color: 'primary.main', mr: -1 }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box
                        component='nav'
                        aria-label='Menu'
                        sx={{ flex: 1, minHeight: 0, overflowY: 'auto' }}
                    >
                        <List disablePadding>
                            {navItems.map(({ text, to }) => {
                                const active = location.pathname === to
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            component={RouterLink}
                                            to={to}
                                            selected={active}
                                            aria-current={
                                                active ? 'page' : undefined
                                            }
                                            onClick={closeMenu}
                                            sx={{
                                                minHeight: 52,
                                                borderRadius: 1,
                                                px: 2,
                                                color: active
                                                    ? 'primary.main'
                                                    : 'text.primary',
                                                '&:hover': {
                                                    backgroundColor:
                                                        accentHover,
                                                },
                                                '&.Mui-selected': {
                                                    backgroundColor: accentTint,
                                                    color: 'primary.main',
                                                    '&:hover': {
                                                        backgroundColor: alpha(
                                                            theme.palette
                                                                .primary.main,
                                                            0.18
                                                        ),
                                                    },
                                                },
                                                '& .MuiListItemText-primary': {
                                                    fontSize: 16,
                                                    fontWeight: active
                                                        ? 600
                                                        : 400,
                                                    color: 'inherit',
                                                },
                                            }}
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>

                        <Divider sx={{ my: 1.5, mx: 0.5 }} />

                        <List disablePadding>
                            {secondaryLinks.map(({ text, href }) => {
                                const external = href.startsWith('http')
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            component='a'
                                            href={href}
                                            target={
                                                external ? '_blank' : undefined
                                            }
                                            rel={
                                                external
                                                    ? 'noreferrer'
                                                    : undefined
                                            }
                                            onClick={closeMenu}
                                            sx={{
                                                minHeight: 44,
                                                borderRadius: 1,
                                                px: 2,
                                                color: 'text.primary',
                                                '&:hover': {
                                                    backgroundColor:
                                                        accentHover,
                                                },
                                                '& .MuiListItemText-primary': {
                                                    fontSize: 15,
                                                    fontWeight: 400,
                                                    color: 'inherit',
                                                },
                                            }}
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>

                    <Button
                        component={RouterLink}
                        to='/contact'
                        variant='contained'
                        fullWidth
                        size='large'
                        onClick={closeMenu}
                        sx={{ mt: 2, flexShrink: 0 }}
                    >
                        Get in touch
                    </Button>
                </Box>
            </Drawer>
        </>
    )
}

export default MobileMenu

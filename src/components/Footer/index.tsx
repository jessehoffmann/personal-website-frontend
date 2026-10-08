import React from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'

import { pageColumnSx } from '../PageColumn'

const links = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jessehoffmann/',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/jessehoffmann',
    },
    {
        label: 'Email',
        href: 'mailto:hoffmann.jesse@gmail.com',
    },
]

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Box
            component='footer'
            sx={{
                mt: { xs: 5, sm: 8 },
                flexGrow: 0,
                flexShrink: 0,
                borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 3 }}
                sx={{
                    ...pageColumnSx,
                    py: 3.5,
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    // Avoid space-between in the column layout — if the footer
                    // ever stretches on mobile, that would shove links to the
                    // bottom and make the footer look a viewport tall.
                    justifyContent: { xs: 'flex-start', sm: 'space-between' },
                }}
            >
                <Typography
                    variant='body2'
                    sx={{ color: 'text.secondary', fontSize: 13 }}
                >
                    © {year} Jesse Thomas Hoffmann
                </Typography>
                <Stack
                    direction='row'
                    useFlexGap
                    spacing={2.5}
                    sx={{ flexWrap: 'wrap' }}
                >
                    {links.map((link) => {
                        const external = link.href.startsWith('http')
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noreferrer' : undefined}
                                underline='hover'
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: 13,
                                    fontWeight: 400,
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </Stack>
            </Stack>
        </Box>
    )
}

export default Footer

import React from 'react'
import { Box, Link, Stack, Typography } from '@mui/material'

import { pageColumnSx } from '../PageColumn'
import resumePdf from '../../static/Jesse_Thomas_Hoffmann_Resume.pdf'

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
    {
        label: 'Resume',
        href: resumePdf,
        download: 'Jesse_Thomas_Hoffmann_Resume.pdf',
    },
]

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <Box
            component='footer'
            sx={{
                mt: { xs: 5, sm: 8 },
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
                    justifyContent: 'space-between',
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
                                download={link.download}
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

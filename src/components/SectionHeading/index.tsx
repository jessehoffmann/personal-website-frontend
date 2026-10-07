import type { ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'

type SectionHeadingProps = {
    children: ReactNode
    meta?: string
    subtitle?: string
}

const SectionHeading = ({ children, meta, subtitle }: SectionHeadingProps) => {
    return (
        <Stack
            spacing={1.5}
            sx={{ mb: 3.5, width: '100%', maxWidth: '100%', minWidth: 0 }}
        >
            <Typography variant='h3' component='h2'>
                {children}
            </Typography>
            {meta && (
                <Typography
                    variant='overline'
                    color='text.secondary'
                    sx={{ display: 'block', textAlign: 'center' }}
                >
                    {meta}
                </Typography>
            )}
            {subtitle && (
                <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        minWidth: 0,
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        overflowWrap: 'break-word',
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Stack>
    )
}

export default SectionHeading

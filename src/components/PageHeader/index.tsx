import { Box, Stack, Typography } from '@mui/material'

import PageColumn from '../PageColumn'

type PageHeaderProps = {
    title: string
    subtitle: string
    image: string
    imagePosition: string
}

const PageHeader = ({
    title,
    subtitle,
    image,
    imagePosition,
}: PageHeaderProps) => {
    return (
        <Box
            component='section'
            sx={{
                position: 'relative',
                height: { xs: 148, sm: 200 },
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: imagePosition,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(8, 22, 30, 0.6)',
                }}
            />
            <PageColumn sx={{ position: 'relative' }}>
                <Stack
                    spacing={0.75}
                    sx={{ width: '100%', minWidth: 0, color: 'common.white' }}
                >
                    <Typography
                        component='h1'
                        color='inherit'
                        sx={{
                            fontWeight: 300,
                            fontSize: { xs: 32, sm: 40 },
                            lineHeight: 1.15,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body1'
                        color='inherit'
                        sx={{ textWrap: 'balance' }}
                    >
                        {subtitle}
                    </Typography>
                </Stack>
            </PageColumn>
        </Box>
    )
}

export default PageHeader

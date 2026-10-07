import { Box, Stack, Typography } from '@mui/material'

import PageColumn from '../PageColumn'
import ProgressiveBackground from '../common/ProgressiveBackground'

type PageHeaderProps = {
    title: string
    subtitle: string
    image: string
    preview: string
    imagePosition: string
}

const PageHeader = ({
    title,
    subtitle,
    image,
    preview,
    imagePosition,
}: PageHeaderProps) => {
    return (
        <ProgressiveBackground
            component='section'
            image={image}
            preview={preview}
            imagePosition={imagePosition}
            sx={{
                height: { xs: 148, sm: 200 },
                display: 'flex',
                alignItems: 'center',
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
        </ProgressiveBackground>
    )
}

export default PageHeader

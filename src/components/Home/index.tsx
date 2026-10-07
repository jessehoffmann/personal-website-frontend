import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    Divider,
    Link,
    Stack,
    Typography,
} from '@mui/material'

import BackgroundLandscape from '../../static/img/fjallabak-2025-jesse-thomas-hoffmann.webp'
import { fjallabakPreview } from '../../static/img/previews'
import PageColumn from '../PageColumn'
import ProgressiveBackground from '../common/ProgressiveBackground'
import SectionHeading from '../SectionHeading'
import { hero, leadershipContext, leadershipHighlights, proofPoints } from './data'

const Home = () => {
    return (
        <main>
            <ProgressiveBackground
                component='section'
                image={BackgroundLandscape}
                preview={fjallabakPreview}
                imagePosition='center 32%'
                sx={{
                    minHeight: { xs: 480, sm: 600 },
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
                <PageColumn
                    sx={{
                        position: 'relative',
                        pt: 9,
                        pb: '148px',
                    }}
                >
                    <Stack spacing={2.75} sx={{ color: 'common.white' }}>
                        <Typography variant='overline' color='inherit'>
                            {hero.eyebrow}
                        </Typography>
                        <Typography
                            variant='h1'
                            color='inherit'
                            sx={{ maxWidth: { xs: '100%', md: 800 } }}
                        >
                            {hero.headline.map((line) => (
                                <Box
                                    component='span'
                                    key={line}
                                    sx={{ display: 'block' }}
                                >
                                    {line}
                                </Box>
                            ))}
                        </Typography>
                        <Typography
                            variant='body1'
                            color='inherit'
                            sx={{ maxWidth: { xs: '100%', md: 620 } }}
                        >
                            {hero.supporting}
                        </Typography>
                        <Stack
                            direction='row'
                            useFlexGap
                            spacing={1.75}
                            sx={{ flexWrap: 'wrap', pt: 1.25 }}
                        >
                            <Button
                                component={RouterLink}
                                to='/experience'
                                variant='contained'
                                size='large'
                                sx={{
                                    bgcolor: 'common.white',
                                    color: 'common.black',
                                    '&:hover': { bgcolor: 'grey.100' },
                                }}
                            >
                                See my experience
                            </Button>
                            <Button
                                component={RouterLink}
                                to='/contact'
                                variant='outlined'
                                size='large'
                                sx={{
                                    color: 'common.white',
                                    borderColor: 'common.white',
                                    '&:hover': {
                                        borderColor: 'common.white',
                                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                }}
                            >
                                Get in touch
                            </Button>
                        </Stack>
                    </Stack>
                </PageColumn>
            </ProgressiveBackground>

            <Box sx={{ position: 'relative', zIndex: 1, mt: '-76px' }}>
                <PageColumn
                    component={Card}
                    sx={{
                        p: { xs: 2.5, sm: 4 },
                    }}
                >
                    <Stack
                        divider={<Divider />}
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                    >
                        {proofPoints.map((point) => (
                            <Stack
                                key={point.label}
                                direction='row'
                                spacing={2}
                                sx={{ alignItems: 'center', py: 1.5 }}
                            >
                                <Typography
                                    color='primary'
                                    sx={{
                                        width: 104,
                                        flexShrink: 0,
                                        fontSize: 30,
                                        fontWeight: 300,
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {point.value}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {point.label}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                    <Stack
                        direction='row'
                        useFlexGap
                        spacing={5}
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexWrap: 'wrap',
                        }}
                    >
                        {proofPoints.map((point) => (
                            <Stack
                                key={point.label}
                                spacing={0.75}
                                sx={{ flex: '1 1 280px' }}
                            >
                                <Typography variant='h2' color='primary'>
                                    {point.value}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {point.label}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </PageColumn>
            </Box>

            <Box
                component='section'
                sx={{ pt: 9, pb: { xs: 0, sm: 10 } }}
            >
                <PageColumn>
                    <SectionHeading meta={leadershipContext}>
                        Leadership Highlights
                    </SectionHeading>
                    <Stack
                        direction='row'
                        useFlexGap
                        spacing={3}
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {leadershipHighlights.map((highlight) => (
                            <Card
                                key={highlight.id}
                                sx={{
                                    flex: '1 1 260px',
                                    p: { xs: 2.5, sm: 4 },
                                }}
                            >
                                <Stack spacing={1.5}>
                                    <Typography
                                        variant='overline'
                                        color='text.secondary'
                                    >
                                        {highlight.eyebrow}
                                    </Typography>
                                    <Typography variant='h5'>
                                        {highlight.title}
                                    </Typography>
                                    <Typography
                                        variant='body1'
                                        color='text.secondary'
                                    >
                                        {highlight.summary}
                                    </Typography>
                                    <Link
                                        component={RouterLink}
                                        to={`/experience#${highlight.id}`}
                                        color='primary'
                                        underline='none'
                                        sx={{ width: 'fit-content' }}
                                    >
                                        Read the case study
                                    </Link>
                                </Stack>
                            </Card>
                        ))}
                    </Stack>
                </PageColumn>
            </Box>
        </main>
    )
}

export default Home

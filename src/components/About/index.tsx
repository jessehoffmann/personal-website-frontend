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

import Headshot from '../../static/img/headshot.jpg'
import DeschutesFrost from '../../static/img/deschutes-frost.jpg'
import PageColumn from '../PageColumn'
import PageHeader from '../PageHeader'
import SectionHeading from '../SectionHeading'
import {
    aboutBio,
    interests,
    outsideIntro,
    photoCredit,
    socialLinks,
} from './data'

const outlinedButtonSx = {
    color: 'text.primary',
    borderColor: 'text.primary',
}

const About = () => {
    return (
        <main>
            <PageHeader
                title='About'
                subtitle='Who I am, at work and away from it.'
                image={DeschutesFrost}
                imagePosition='center 38%'
            />
            <PageColumn sx={{ pt: 5, pb: 2 }}>
                <Stack spacing={6}>
                    <Card sx={{ p: { xs: 2.5, sm: 4 } }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '96px minmax(0, 1fr)',
                                    sm: '180px minmax(0, 1fr)',
                                },
                                columnGap: { xs: 1.5, sm: 4 },
                                rowGap: 2,
                                alignItems: { xs: 'center', sm: 'start' },
                            }}
                        >
                            <Box
                                component='img'
                                src={Headshot}
                                alt='Jesse Thomas Hoffmann'
                                sx={{
                                    gridColumn: 1,
                                    gridRow: { xs: 1, sm: '1 / span 2' },
                                    width: { xs: 96, sm: 180 },
                                    height: { xs: 'auto', sm: 230 },
                                    objectFit: { sm: 'cover' },
                                    borderRadius: { xs: '12px', sm: 1 },
                                    alignSelf: { xs: 'center', sm: 'start' },
                                    justifySelf: 'start',
                                }}
                            />
                            <Stack
                                spacing={0.5}
                                sx={{
                                    gridColumn: 2,
                                    gridRow: 1,
                                    minWidth: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant='h5' component='h2'>
                                    {"Hi, I'm Jesse."}
                                </Typography>
                                <Typography
                                    variant='overline'
                                    sx={{
                                        display: { xs: 'block', sm: 'none' },
                                        color: 'text.secondary',
                                        fontSize: 11,
                                        letterSpacing: '0.04em',
                                        lineHeight: 1.3,
                                        textWrap: 'balance',
                                    }}
                                >
                                    Software Engineering Leader
                                </Typography>
                            </Stack>
                            <Stack
                                spacing={2}
                                sx={{
                                    gridColumn: { xs: '1 / -1', sm: 2 },
                                    gridRow: 2,
                                    minWidth: 0,
                                }}
                            >
                                {aboutBio.map((paragraph) => (
                                    <Typography key={paragraph} variant='body1'>
                                        {paragraph}
                                    </Typography>
                                ))}
                                <Stack
                                    direction='row'
                                    useFlexGap
                                    spacing={1.5}
                                    sx={{ flexWrap: 'wrap', pt: 0.5 }}
                                >
                                    {socialLinks.map((link) => (
                                        <Button
                                            key={link.label}
                                            variant='outlined'
                                            href={link.href}
                                            target='_blank'
                                            rel='noreferrer'
                                            sx={outlinedButtonSx}
                                        >
                                            {link.label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                    </Card>

                    <Box>
                        <SectionHeading subtitle={outsideIntro}>
                            Outside of Work
                        </SectionHeading>
                        <Stack
                            direction='row'
                            useFlexGap
                            spacing={3}
                            sx={{ flexWrap: 'wrap' }}
                        >
                            {interests.map((interest) => (
                                <Card
                                    key={interest.title}
                                    sx={{
                                        flex: '1 1 260px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {interest.image ? (
                                        <Box
                                            component='img'
                                            src={interest.image}
                                            alt={
                                                interest.photoAlt ??
                                                interest.title
                                            }
                                            sx={{
                                                width: '100%',
                                                height: 170,
                                                objectFit: 'cover',
                                                objectPosition:
                                                    interest.imagePosition ??
                                                    'center',
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                minHeight: 170,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: 'grey.100',
                                                px: 2,
                                            }}
                                        >
                                            <Typography
                                                variant='body2'
                                                color='text.secondary'
                                                sx={{ textAlign: 'center' }}
                                            >
                                                {interest.photoLabel}
                                            </Typography>
                                        </Box>
                                    )}
                                    <Divider />
                                    <Stack spacing={1} sx={{ p: 2.5 }}>
                                        <Typography variant='h5' component='h3'>
                                            {interest.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                        >
                                            {interest.caption}
                                        </Typography>
                                        {interest.linkLabel && (
                                            <Link
                                                href={
                                                    interest.href || undefined
                                                }
                                                component={
                                                    interest.href ? 'a' : 'span'
                                                }
                                                color='primary'
                                                underline='hover'
                                                target={
                                                    interest.href
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    interest.href
                                                        ? 'noreferrer'
                                                        : undefined
                                                }
                                                sx={{ width: 'fit-content' }}
                                            >
                                                {interest.linkLabel}
                                            </Link>
                                        )}
                                    </Stack>
                                </Card>
                            ))}
                        </Stack>
                        <Typography
                            variant='body2'
                            color='text.secondary'
                            sx={{ textAlign: 'center', mt: 3 }}
                        >
                            {photoCredit}
                        </Typography>
                    </Box>

                    <Stack
                        direction='row'
                        useFlexGap
                        spacing={1.75}
                        sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Button
                            component={RouterLink}
                            to='/experience'
                            variant='contained'
                            size='large'
                        >
                            See my experience
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/contact'
                            variant='outlined'
                            size='large'
                            sx={outlinedButtonSx}
                        >
                            Get in touch
                        </Button>
                    </Stack>
                </Stack>
            </PageColumn>
        </main>
    )
}

export default About

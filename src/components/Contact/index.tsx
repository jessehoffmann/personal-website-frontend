import React from 'react'
import { Card, Divider, Link, Stack, Typography } from '@mui/material'

import ContactForm from '../ContactForm'
import PageColumn from '../PageColumn'
import PageHeader from '../PageHeader'
import resumePdf from '../../static/Jesse_Thomas_Hoffmann_Resume.pdf'
import Beach from '../../static/img/walk-on-the-beach.jpg'
import { contactIntro, contactLinks } from './data'

type ContactLink = {
    label: string
    text: string
    href: string
    download?: boolean
}

const links: ContactLink[] = [
    ...contactLinks,
    {
        label: 'Resume',
        text: 'Download PDF',
        href: resumePdf,
        download: true,
    },
]

const Contact = () => {
    return (
        <main>
            <PageHeader
                title='Contact'
                subtitle='The quickest ways to reach me.'
                image={Beach}
                imagePosition='center 30%'
            />
            <PageColumn sx={{ pt: 5 }}>
                <Stack
                    direction='row'
                    useFlexGap
                    spacing={7}
                    sx={{
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                    }}
                >
                    <Stack
                        spacing={2.25}
                        sx={{ flex: '2 1 320px', minWidth: 0 }}
                    >
                        <Typography
                            variant='h3'
                            component='h2'
                            sx={{ textAlign: 'left' }}
                        >
                            Get in Touch
                        </Typography>
                        <Typography variant='body1'>{contactIntro}</Typography>
                        <Stack sx={{ mt: 0.75 }}>
                            {links.map((link) => {
                                const external =
                                    link.href.startsWith('http') ||
                                    link.href.startsWith('mailto:')
                                return (
                                    <React.Fragment key={link.label}>
                                        <Divider />
                                        <Stack
                                            direction='row'
                                            useFlexGap
                                            spacing={2}
                                            sx={{
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                minHeight: 56,
                                                py: 1,
                                            }}
                                        >
                                            <Typography
                                                variant='overline'
                                                color='text.secondary'
                                            >
                                                {link.label}
                                            </Typography>
                                            <Link
                                                href={link.href || undefined}
                                                component={
                                                    link.href ? 'a' : 'span'
                                                }
                                                download={
                                                    link.download
                                                        ? 'Jesse_Thomas_Hoffmann_Resume.pdf'
                                                        : undefined
                                                }
                                                target={
                                                    external
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    external
                                                        ? 'noreferrer'
                                                        : undefined
                                                }
                                                color='primary'
                                                underline='always'
                                            >
                                                {link.text}
                                            </Link>
                                        </Stack>
                                    </React.Fragment>
                                )
                            })}
                            <Divider />
                        </Stack>
                    </Stack>

                    <Card
                        sx={{
                            flex: '3 1 400px',
                            minWidth: 0,
                            p: { xs: 2.5, sm: 5 },
                        }}
                    >
                        <Stack spacing={2.5}>
                            <Typography variant='h5' component='h2'>
                                Or send a message
                            </Typography>
                            <ContactForm />
                        </Stack>
                    </Card>
                </Stack>
            </PageColumn>
        </main>
    )
}

export default Contact

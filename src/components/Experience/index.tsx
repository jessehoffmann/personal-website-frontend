import React, { useEffect, useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    Collapse,
    Divider,
    Link,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { leadershipContext, projectsList } from '../Home/data'
import PageColumn from '../PageColumn'
import PageHeader from '../PageHeader'
import SectionHeading from '../SectionHeading'
import resumePdf from '../../static/Jesse_Thomas_Hoffmann_Resume.pdf'
import Seattle from '../../static/img/seattle.webp'
import { caseStudies, howILead, timeline } from './data'

const StudyParagraph = ({ label, text }: { label: string; text: string }) => (
    <Typography variant='body1'>
        <Box component='strong' sx={{ fontWeight: 600 }}>
            {label}{' '}
        </Box>
        {text}
    </Typography>
)

const CaseStudyCard = ({ study }: { study: (typeof caseStudies)[number] }) => {
    const theme = useTheme()
    const isCompact = useMediaQuery(theme.breakpoints.down('sm'), {
        noSsr: true,
    })
    const [expanded, setExpanded] = useState(false)

    const situation = (
        <StudyParagraph label='Situation.' text={study.situation} />
    )
    const action = <StudyParagraph label='What I did.' text={study.action} />
    const result = <StudyParagraph label='Result.' text={study.outcome} />

    return (
        <Card
            id={study.id}
            sx={{
                px: { xs: 2.5, sm: 5.5 },
                py: 4.5,
                scrollMarginTop: '96px',
            }}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                useFlexGap
                spacing={{ xs: 3, sm: 6 }}
                sx={{ flexWrap: { sm: 'wrap' } }}
            >
                <Stack
                    spacing={1}
                    sx={{ flex: { xs: '0 0 auto', sm: '1 1 200px' } }}
                >
                    <Typography variant='overline' color='text.secondary'>
                        {study.label}
                    </Typography>
                    <Typography variant='h2' color='primary'>
                        {study.result}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {study.resultLabel}
                    </Typography>
                </Stack>
                <Stack
                    spacing={1.5}
                    sx={{
                        flex: { xs: '0 0 auto', sm: '3 1 440px' },
                        minWidth: 0,
                    }}
                >
                    <Typography variant='h5'>{study.title}</Typography>
                    {isCompact ? (
                        <Stack spacing={1.5}>
                            {result}
                            <Box>
                                <Collapse in={expanded}>
                                    <Stack spacing={1.5} sx={{ mb: 1.5 }}>
                                        {situation}
                                        {action}
                                    </Stack>
                                </Collapse>
                                <Button
                                    variant='text'
                                    onClick={() => setExpanded((open) => !open)}
                                    aria-expanded={expanded}
                                    sx={{
                                        px: 0,
                                        minWidth: 0,
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    {expanded ? 'Show less' : 'Read more'}
                                </Button>
                            </Box>
                        </Stack>
                    ) : (
                        <Stack spacing={1.5}>
                            {situation}
                            {action}
                            {result}
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </Card>
    )
}

const Experience = () => {
    const location = useLocation()
    const [currentProject, ...earlierProjects] = projectsList

    useEffect(() => {
        if (!location.hash) return
        const id = location.hash.replace('#', '')
        document.getElementById(id)?.scrollIntoView()
    }, [location.hash])

    return (
        <main>
            <PageHeader
                title='Experience'
                subtitle="Where I've led teams, what changed, and how I work."
                image={Seattle}
                imagePosition='center 52%'
            />
            <PageColumn sx={{ pt: 5 }}>
                <Stack spacing={7}>
                    <Box>
                        <SectionHeading>Career Timeline</SectionHeading>
                        <Card
                            sx={{
                                px: { xs: 2.5, sm: 6 },
                                py: { xs: 0, sm: 5 },
                            }}
                        >
                            {timeline.map((role, index) => (
                                <React.Fragment key={role.title}>
                                    {index > 0 && <Divider />}
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        useFlexGap
                                        spacing={{ xs: 0.5, sm: 4 }}
                                        sx={{
                                            flexWrap: { sm: 'wrap' },
                                            py: { xs: 2.5, sm: 2.75 },
                                        }}
                                    >
                                        <Typography
                                            variant='body2'
                                            color='text.secondary'
                                            sx={{
                                                flex: { sm: '0 0 190px' },
                                                fontWeight: 600,
                                                letterSpacing: '0.06em',
                                                pt: { sm: 0.5 },
                                            }}
                                        >
                                            {role.dates}
                                        </Typography>
                                        <Stack
                                            spacing={0.75}
                                            sx={{
                                                flex: { sm: '1 1 320px' },
                                                minWidth: 0,
                                            }}
                                        >
                                            <Typography variant='h5'>
                                                {role.title}
                                            </Typography>
                                            <Typography
                                                variant='body1'
                                                color='text.secondary'
                                            >
                                                {role.summary}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </React.Fragment>
                            ))}
                        </Card>
                    </Box>

                    <Box>
                        <SectionHeading meta={leadershipContext}>
                            Leadership Case Studies
                        </SectionHeading>
                        <Stack spacing={3.5}>
                            {caseStudies.map((study) => (
                                <CaseStudyCard key={study.id} study={study} />
                            ))}
                        </Stack>
                    </Box>

                    <Box>
                        <SectionHeading>How I Lead</SectionHeading>
                        <Card sx={{ px: { xs: 2.5, sm: 6 }, py: 5 }}>
                            <Stack
                                direction='row'
                                useFlexGap
                                spacing={6}
                                sx={{ flexWrap: 'wrap' }}
                            >
                                {howILead.map((item) => (
                                    <Stack
                                        key={item.title}
                                        spacing={1}
                                        sx={{ flex: '1 1 340px', minWidth: 0 }}
                                    >
                                        <Typography variant='h5'>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body1'>
                                            {item.body}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Card>
                    </Box>

                    <Box>
                        <SectionHeading>Hands-on Work</SectionHeading>
                        <Card sx={{ px: { xs: 2.5, sm: 5.5 }, py: 4.5 }}>
                            <Stack
                                direction='row'
                                useFlexGap
                                spacing={7}
                                sx={{ flexWrap: 'wrap' }}
                            >
                                <Stack
                                    spacing={1.5}
                                    sx={{ flex: '3 1 380px', minWidth: 0 }}
                                >
                                    <Typography
                                        variant='overline'
                                        color='text.secondary'
                                    >
                                        Current
                                    </Typography>
                                    <Typography variant='h5'>
                                        {currentProject.title}
                                    </Typography>
                                    <Typography variant='body1'>
                                        {currentProject.description}
                                    </Typography>
                                    {currentProject.details && (
                                        <Box
                                            component='ul'
                                            sx={{
                                                m: 0,
                                                pl: '1.25em',
                                                listStylePosition: 'outside',
                                                '& > li + li': { mt: 0.5 },
                                            }}
                                        >
                                            {currentProject.details.map(
                                                (detail) => (
                                                    <Typography
                                                        key={detail}
                                                        component='li'
                                                        variant='body1'
                                                        sx={{
                                                            display:
                                                                'list-item',
                                                            pl: '0.25em',
                                                        }}
                                                    >
                                                        {detail}
                                                    </Typography>
                                                )
                                            )}
                                        </Box>
                                    )}
                                    <Link
                                        href={currentProject.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        color='primary'
                                        underline='none'
                                        sx={{ width: 'fit-content' }}
                                    >
                                        View the code on GitHub
                                    </Link>
                                </Stack>
                                <Stack
                                    spacing={0.5}
                                    sx={{ flex: '2 1 280px', minWidth: 0 }}
                                >
                                    <Typography
                                        variant='overline'
                                        color='text.secondary'
                                        sx={{ mb: 1 }}
                                    >
                                        Earlier work
                                    </Typography>
                                    {earlierProjects.map((project) => (
                                        <React.Fragment key={project.title}>
                                            <Divider />
                                            <Stack
                                                spacing={0.25}
                                                sx={{ py: 1.25 }}
                                            >
                                                <Link
                                                    href={project.link}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    color='text.primary'
                                                    underline='always'
                                                >
                                                    {project.title}
                                                </Link>
                                                <Typography
                                                    variant='body2'
                                                    color='text.secondary'
                                                >
                                                    {project.technologies}
                                                </Typography>
                                            </Stack>
                                        </React.Fragment>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card>
                    </Box>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        useFlexGap
                        spacing={{ xs: 1.5, sm: 1.75 }}
                        sx={{
                            alignItems: { xs: 'stretch', sm: 'center' },
                            justifyContent: { sm: 'center' },
                        }}
                    >
                        <Button
                            variant='contained'
                            size='large'
                            href={resumePdf}
                            download='Jesse_Thomas_Hoffmann_Resume.pdf'
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            Download resume (PDF)
                        </Button>
                        <Button
                            component={RouterLink}
                            to='/contact'
                            variant='outlined'
                            size='large'
                            sx={{
                                width: { xs: '100%', sm: 'auto' },
                                color: 'text.primary',
                                borderColor: 'text.primary',
                            }}
                        >
                            Get in touch
                        </Button>
                    </Stack>
                </Stack>
            </PageColumn>
        </main>
    )
}

export default Experience

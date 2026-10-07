import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material'

import PageColumn from '../PageColumn'
import PageHeader from '../PageHeader'
import SectionHeading from '../SectionHeading'
import Hoh from '../../static/img/hoh.jpg'
import { leadershipSkills, technicalSkills } from './data'

const Skills = () => {
    return (
        <main>
            <PageHeader
                title='Skills'
                subtitle='What I do as a leader and the technology I work in.'
                image={Hoh}
                imagePosition='center 60%'
            />
            <PageColumn sx={{ pt: 5 }}>
                <Stack spacing={6}>
                    <Box>
                        <SectionHeading>Leadership Skills</SectionHeading>
                        <Card
                            sx={{
                                px: { xs: 2.5, sm: 6 },
                                py: { xs: 2.5, sm: 5 },
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                useFlexGap
                                spacing={{ xs: 3, sm: 6 }}
                                sx={{ flexWrap: { sm: 'wrap' } }}
                            >
                                {leadershipSkills.map((group) => (
                                    <Stack
                                        key={group.title}
                                        spacing={1.25}
                                        sx={{
                                            flex: {
                                                xs: '0 0 auto',
                                                sm: '1 1 340px',
                                            },
                                            minWidth: 0,
                                        }}
                                    >
                                        <Typography variant='h5'>
                                            {group.title}
                                        </Typography>
                                        <List
                                            component='ul'
                                            disablePadding
                                            sx={{
                                                listStyleType: 'disc',
                                                pl: 2.5,
                                            }}
                                        >
                                            {group.items.map((item) => (
                                                <ListItem
                                                    key={item}
                                                    component='li'
                                                    disablePadding
                                                    sx={{
                                                        display: 'list-item',
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={item}
                                                        slotProps={{
                                                            primary: {
                                                                variant:
                                                                    'body1',
                                                            },
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Stack>
                                ))}
                            </Stack>
                        </Card>
                    </Box>

                    <Box>
                        <SectionHeading>Technical Skills</SectionHeading>
                        <Card
                            sx={{
                                px: { xs: 2.5, sm: 6 },
                                py: { xs: 0, sm: 5 },
                            }}
                        >
                            {technicalSkills.map((group, index) => (
                                <React.Fragment key={group.label}>
                                    {index > 0 && <Divider />}
                                    <Stack
                                        direction={{ xs: 'column', sm: 'row' }}
                                        useFlexGap
                                        spacing={{ xs: 1, sm: 4 }}
                                        sx={{
                                            flexWrap: { sm: 'wrap' },
                                            alignItems: {
                                                xs: 'flex-start',
                                                sm: 'baseline',
                                            },
                                            py: { xs: 2, sm: 2.5 },
                                        }}
                                    >
                                        <Typography
                                            variant='overline'
                                            color='text.secondary'
                                            sx={{ flex: { sm: '0 0 170px' } }}
                                        >
                                            {group.label}
                                        </Typography>
                                        <Stack
                                            direction='row'
                                            useFlexGap
                                            spacing={1.25}
                                            sx={{
                                                flex: {
                                                    sm: '1 1 320px',
                                                },
                                                flexWrap: 'wrap',
                                                minWidth: 0,
                                            }}
                                        >
                                            {group.skills.map((skill) => (
                                                <Chip
                                                    key={skill}
                                                    label={skill}
                                                    variant={
                                                        group.outlined
                                                            ? 'outlined'
                                                            : 'filled'
                                                    }
                                                    color='default'
                                                />
                                            ))}
                                        </Stack>
                                    </Stack>
                                </React.Fragment>
                            ))}
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
                            component={RouterLink}
                            to='/experience'
                            variant='contained'
                            size='large'
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            See these skills in practice
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

export default Skills

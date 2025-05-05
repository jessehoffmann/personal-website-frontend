import React from 'react'
import { skills } from './data'
import SkillCard from './SkillCard'
import { Box, Grid } from '@mui/material'
import PropTypes from 'prop-types'

function SkillList({ category }) {
    const filtered = category
        ? skills.filter((skill) => skill.category === category)
        : skills

    return (
        <Grid container spacing={2} sx={{ p: 2 }}>
            {filtered.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </Grid>
    )
}

SkillList.propTypes = {
    category: PropTypes.string,
}

export default SkillList

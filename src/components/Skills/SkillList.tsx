import React from 'react'
import { SkillCategories, skills } from './data'
import SkillCard from './SkillCard'
import { Grid } from '@mui/material'

function SkillList({ category }: { category?: SkillCategories }) {
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

export default SkillList

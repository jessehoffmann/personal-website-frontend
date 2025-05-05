import React from 'react'
import { Card, CardContent, Typography, LinearProgress, Grid } from '@mui/material'
import PropTypes from 'prop-types'

function SkillCard({ name, level, category }) {
    return (
        <Grid size={3}>
            <Card>
            <CardContent>
                <Typography variant='h6'>{name}</Typography>
                <Typography variant='body2' color='text.secondary'>
                    {category}
                </Typography>
                <LinearProgress
                    variant='determinate'
                    value={(level / 10) * 100}
                    sx={{ mt: 1 }}
                />
            </CardContent>
            </Card>
        </Grid>
    )
}

SkillCard.propTypes = {
    name: PropTypes.string,
    level: PropTypes.number,
    category: PropTypes.string,
}

export default SkillCard

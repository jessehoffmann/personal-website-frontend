import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    LinearProgress,
    Grid,
} from '@mui/material'
import PropTypes from 'prop-types'
import { categoryColors } from '.'
import { convertHexToRGBA } from '../../helpers/hexToRgba'

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
                        sx={{
                            mt: 1,
                            '& .MuiLinearProgress-barColorPrimary': {
                                backgroundColor: categoryColors[category], // your custom color
                            },
                            backgroundColor: convertHexToRGBA(
                                categoryColors[category],
                                0.3
                            ),
                        }}
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

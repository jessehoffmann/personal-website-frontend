import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    LinearProgress,
    Grid,
} from '@mui/material'
import { categoryColors } from '.'
import { convertHexToRGBA } from '../../helpers/hexToRgba'
import { SkillProps } from './data'

const SkillCard: React.FC<SkillProps> = ({ name, level, category }) => {
    return (
        <Grid size={{ xs: 6, md: 3 }}>
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

export default SkillCard

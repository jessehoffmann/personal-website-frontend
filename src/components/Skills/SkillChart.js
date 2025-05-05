import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { skills } from './data'
import { categoryColors } from '.'

export default function SkillChart() {
    return (
        <BarChart
            yAxis={[
                {
                    max: 10,
                    label: 'Skill Level',
                },
            ]}
            xAxis={[
                {
                    scaleType: 'band',
                    data: skills.map((s) => s.name),
                    categoryGapRatio: 0.04,
                    colorMap: {
                        type: 'ordinal',
                        values: skills.map((s) => s.name),
                        colors: skills.map((s) => categoryColors[s.category]),
                    },
                    tickNumber: 10,
                    tickLabelStyle: {
                        fontSize: 5,
                    },
                },
            ]}
            series={[
                {
                    data: skills.map((s) => s.level),
                    label: (location) =>
                        location === 'tooltip' ? 'Skill Level' : undefined,
                    color: '#1976d2', // Use a single color
                },
            ]}
            height={500}
            margin={{ right: 50 }}
        />
    )
}

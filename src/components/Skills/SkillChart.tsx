import React from 'react'
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart'
import { SkillProps, skills } from './data'
import { categoryColors } from '.'

interface CustomAxisProps {
    scaleType: 'band'
    data: string[]
    categoryGapRatio: number
    colorMap?: {
        type: 'ordinal'
        values: string[]
        colors: string[]
    }
    tickNumber: number
    tickLabelStyle: {
        fontSize: number
    }
}

interface CustomYAxisProps {
    max: number
    label: string
}

// There is a bug with types in mui x bar chart right now so we need to override the types for the component
type BarChartProps = Omit<
    React.ComponentProps<typeof MuiBarChart>,
    'xAxis' | 'yAxis'
> & {
    xAxis: CustomAxisProps[]
    yAxis: CustomYAxisProps[]
    height?: number
    margin?: {
        top?: number
        right?: number
        bottom?: number
        left?: number
    }
}

const BarChart: React.FC<BarChartProps> = (props) => {
    return <MuiBarChart {...props} />
}

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
                        colors: skills.map(
                            (s: SkillProps) => categoryColors[s.category]
                        ),
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
                        location === 'tooltip'
                            ? 'Skill Level'
                            : (undefined as unknown as string),
                    color: '#1976d2', // Use a single color
                },
            ]}
            height={500}
            margin={{ right: 50 }}
            sx={{
                '& svg': {
                    touchAction: 'auto',
                },
            }}
        />
    )
}

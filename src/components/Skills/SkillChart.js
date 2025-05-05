import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { skills } from './data'
import { useItemTooltip } from '@mui/x-charts'

const categoryColors = {
    Languages: '#1976d2',
    Frameworks: '#388e3c',
    Tools: '#f57c00',
    Testing: '#7b1fa2',
    Cloud: '#0288d1',
}

const categories = Object.keys(categoryColors)

const groupedSkills = categories.map((category) => {
    return {
        category,
        data: skills.map((skill) =>
            skill.category === category ? skill.level : null
        ),
    }
})

function CustomItemTooltipContent() {
  const tooltipData = useItemTooltip();

  if (!tooltipData) { // No data to display
    return null;
  }

  return <div>Test</div>;
}

export default function SkillChart() {
    return (
        <BarChart
            xAxis={[
                {
                    scaleType: 'band',
                    data: skills.map((s) => s.name),
                    tickLabelStyle: { display: 'none' },
                    barGapRatio: 0,
                    tickLabelMinGap: 0,
                    categoryGapRatio: 0,
                    tickPlacement: 'start',
                },
            ]}
            series={groupedSkills.map((group) => ({
                data: group.data,
                label: group.category,
                color: categoryColors[group.category],
            }))}
            height={400}
        />
    )
}

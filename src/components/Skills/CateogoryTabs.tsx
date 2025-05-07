import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Box } from '@mui/material'
import { SkillCategories } from './data'

const categories = [
    'All',
    'Languages',
    'Frameworks',
    'Tools',
    'Testing',
    'Cloud',
]

function CategoryTabs({
    selected,
    onChange,
}: {
    selected: SkillCategories | 'All'
    onChange: (value: SkillCategories | 'All') => void
}) {
    const handleChange = (_: unknown, newValue: SkillCategories | 'All') => {
        onChange(newValue)
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={selected}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='auto'
            >
                {categories.map((cat) => (
                    <Tab key={cat} label={cat} value={cat} />
                ))}
            </Tabs>
        </Box>
    )
}

CategoryTabs.propTypes = {
    selected: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default CategoryTabs

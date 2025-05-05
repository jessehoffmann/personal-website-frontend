import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab, Box } from '@mui/material'

const categories = [
    'All',
    'Languages',
    'Frameworks',
    'Tools',
    'Testing',
    'Cloud',
]

function CategoryTabs({ selected, onChange }) {
    const handleChange = (_, newValue) => {
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

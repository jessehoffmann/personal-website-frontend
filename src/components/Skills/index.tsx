import React, { useState } from 'react'
import SkillChart from './SkillChart'
import SkillList from './SkillList'
import CategoryTabs from './CateogoryTabs'
import { PageContainer, PageTitle } from '../styled'
import { SkillCategories } from './data'

export const categoryColors = {
    Languages: '#1976d2',
    Frameworks: '#388e3c',
    Tools: '#f57c00',
    Testing: '#7b1fa2',
    Cloud: '#ff2400',
}

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<
        SkillCategories | 'All'
    >('All')

    return (
        <main>
            <PageContainer>
                <div className='blocks about'>
                    <PageTitle>Software Development Skills</PageTitle>
                    <SkillChart />
                    <CategoryTabs
                        selected={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <SkillList
                        category={
                            selectedCategory === 'All'
                                ? undefined
                                : selectedCategory
                        }
                    />
                </div>
            </PageContainer>
        </main>
    )
}

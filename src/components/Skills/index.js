import React, { useState } from 'react'
import SkillChart from './SkillChart'
import SkillList from './SkillList'
import CategoryTabs from './CateogoryTabs'
import { PageContainer, PageTitle } from '../styled'

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    return (
        <main>
            <PageContainer>
                <div className='blocks about'>
                    <PageTitle>Software Development Skills</PageTitle>
                    <br />
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

export enum SkillCategories {
    Languages = 'Languages',
    Frameworks = 'Frameworks',
    Tools = 'Tools',
    Testing = 'Testing',
    Cloud = 'Cloud',
}

export interface SkillProps {
    name: string
    level: number
    category: SkillCategories
}

export const skills: SkillProps[] = [
    { name: 'TypeScript', level: 9, category: SkillCategories.Languages },
    { name: 'JavaScript', level: 9, category: SkillCategories.Languages },
    { name: 'Python', level: 7, category: SkillCategories.Languages },
    { name: 'SQL', level: 6, category: SkillCategories.Languages },
    { name: 'Java', level: 5, category: SkillCategories.Languages },
    { name: 'PHP', level: 3, category: SkillCategories.Languages },
    { name: 'React', level: 9, category: SkillCategories.Frameworks },
    { name: 'Next.js', level: 8, category: SkillCategories.Frameworks },
    { name: 'Flask', level: 4, category: SkillCategories.Frameworks },
    { name: 'Django', level: 5, category: SkillCategories.Frameworks },
    { name: 'Express', level: 8, category: SkillCategories.Frameworks },
    { name: 'Apollo Server', level: 8, category: SkillCategories.Frameworks },
    { name: 'Docker', level: 7, category: SkillCategories.Tools },
    { name: 'GitLab CI/CD', level: 7, category: SkillCategories.Tools },
    { name: 'Jest', level: 8, category: SkillCategories.Testing },
    { name: 'Cypress', level: 7, category: SkillCategories.Testing },
    { name: 'Cucumber', level: 8, category: SkillCategories.Testing },
    { name: 'AWS Lambda', level: 8, category: SkillCategories.Cloud },
    { name: 'AWS SQS/SNS', level: 9, category: SkillCategories.Cloud },
    { name: 'AWS RDS', level: 6, category: SkillCategories.Cloud },
    { name: 'Firebase', level: 9, category: SkillCategories.Cloud },
]

export const hero = {
    eyebrow: 'Software Engineering Leader',
    headline: ['Process Oriented.', 'Quality Focused.'],
    supporting:
        'Full stack engineer turned engineering lead. I pair hands-on architecture experience with a focus on developer growth and smooth delivery.',
}

export const proofPoints = [
    {
        value: '7+ yrs',
        label: 'software engineering experience',
    },
    {
        value: '4 yrs',
        label: 'leading software teams',
    },
    {
        value: '100+',
        label: 'production releases shipped by my teams',
    },
]

export const leadershipContext = 'WebPT · 2021–Present'

export const leadershipHighlights = [
    {
        id: 'case-1',
        eyebrow: 'Delivery',
        title: 'Core EMR task management systems',
        summary:
            'I lead a team of 4–7 engineers shipping biweekly releases for 7 Apollo microservices, holding 99.9% availability and a 95 Apdex score while raising sprint velocity by 25%.',
    },
    {
        id: 'case-2',
        eyebrow: 'Architecture',
        title: 'Real-time event-driven architecture',
        summary:
            'I designed and led an AWS SNS/SQS fan-out that replaced hourly batch syncs between Tasking and the EMR, bringing user record sync from over an hour to about a second and peak database CPU from 90% to 40%.',
    },
    {
        id: 'case-3',
        eyebrow: 'Quality',
        title: 'Company-wide BDD and quality standards',
        summary:
            'I led shared BDD adoption across 100+ engineers and established 100% API integration coverage on 7 microservices.',
    },
]

export const projectsList = [
    {
        link: 'https://github.com/jessehoffmann/Personal-Website',
        title: 'Portfolio',
        technologies: 'React, React Router, MUI, AWS Amplify, Formspree',
        description:
            "The website you're looking at right now! This React based website is deployed with AWS Amplify and utilizes the following:",
        details: [
            'React Router for page routing',
            'MUI components for layout and responsive design',
            'Formspree API for secure emails through the contact page',
        ],
    },
    {
        link: 'https://github.com/jessehoffmann/Catalog',
        title: 'Catalog',
        technologies: 'Python, Flask, SQLAlchemy, OAuth 2.0',
        description:
            'This application was designed for catalog-style record keeping. Features include:',
        details: [
            'Runs on vagrant for creating virtual development environment',
            'Built with Python Flask framework',
            'Uses SQLAlchemy for object-relational mapping',
            'Ensures secure user authorization with OAuth 2.0',
        ],
    },
    {
        link: 'https://github.com/jessehoffmann/Movie-Trailer-Website',
        title: 'Movie Trailers',
        technologies: 'Python, HTML, CSS',
        description:
            "Simple full stack application that uses Python's object-oriented style programming and simple HTML/CSS to display trailers of my favorite movies.",
    },
    {
        link: 'https://github.com/jessehoffmann/Neighborhood-Map',
        title: 'Map',
        technologies: 'JavaScript, Knockout.js, jQuery',
        description:
            'Javascript application that utilizes Knockout.js features of data-binding and automatic UI refresh. It also takes advantage of Ajax (jQuery) for API requests.',
    },
    {
        link: 'https://github.com/jessehoffmann/oop-applications',
        title: 'OOP Applications',
        technologies: 'Java: Blackjack game, expense tracker',
        description:
            'Various Java applications utilizing object oriented design principles. Applications include:',
        details: ['Single player Blackjack game', 'Expense tracker'],
    },
]

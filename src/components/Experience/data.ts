export const timeline = [
    {
        dates: '2021 – Present',
        title: 'Senior Software Engineer, Team Lead · WebPT',
        summary:
            'Lead a team of 4–7 engineers owning architecture and delivery of core task management systems for EMR.',
    },
    {
        dates: '2019 – 2021',
        title: 'Software Developer · Green Light Labs',
        summary:
            'Sole engineer who built and launched Electrifyze, a white-labeled React learning platform that reached thousands of users in its first year.',
    },
    {
        dates: '2019',
        title: 'Web Developer Intern · Vegvisits',
        summary:
            'Where it started: a remote internship building a React travel booking app for about 1,000 properties, and configuring the AWS EC2 and MySQL servers behind it.',
    },
]

export const caseStudies = [
    {
        id: 'case-1',
        label: 'Delivery',
        result: '99.9%',
        resultLabel: 'service availability',
        title: 'Core EMR task management systems',
        situation:
            'When I took over engineering delivery for the core tasking platform, planning bottlenecks, slow peer reviews, and administrative overhead stretched quarterly planning across two full days.',
        action: 'I lead a team of 4–7 engineers that owns technical direction, architecture, and biweekly releases for 7 Apollo Server microservices handling 15,000 daily requests. As embedded scrum master I tightened sprint workflows, brought peer-review turnaround within two hours, hired near-shore contract engineers, and run biweekly 1:1s and annual performance evaluations. I also wrote Cursor rules that automate data mapping and Jira workflows, saving each engineer about five hours a week.',
        outcome:
            'The services hold 99.9% availability and a 95 Apdex score. Sprint velocity rose 25%, quarterly planning dropped from two days to three hours, and cross-application component delivery is three times faster.',
    },
    {
        id: 'case-2',
        label: 'Reliability',
        result: '~1s',
        resultLabel: 'user record sync time',
        title: 'Real-time event-driven architecture',
        situation:
            'User data between Tasking and the legacy EMR databases synchronized through hourly cron jobs and S3 CSV uploads. Syncs lagged by more than an hour, data bugs were frequent, and database CPU spiked to 90% during peak traffic.',
        action: 'I designed and led an asynchronous AWS SNS/SQS fan-out to replace the batch jobs. I guided the team through event filtering, multi-layer validation, and dead-letter queues so records stayed intact across the two database schemas.',
        outcome:
            'Sync time fell from over an hour to about a second across 17,000 daily messages. Peak database CPU dropped from 90% to 40%, timeout errors ended, and P2 and P3 production defects fell.',
    },
    {
        id: 'case-3',
        label: 'Process',
        result: '100+',
        resultLabel: 'engineers on the shared BDD standard',
        title: 'Company-wide BDD and quality standards',
        situation:
            'Cross-application integration defects kept reaching production because disconnected engineering teams tested in inconsistent ways.',
        action: 'I ran bi-monthly BDD refinement meetings and drove adoption of a shared testing repository across dozens of teams and 100+ engineers. I also brought 20+ Mirth channels into CI/CD with automated tests.',
        outcome:
            'Seven Apollo microservices reached 100% API integration test coverage, and the quality standard spread across the engineering organization. Automated Mirth deploys removed manual incidents on about 1.5 million daily healthcare messages.',
    },
]

export const howILead = [
    {
        title: '1:1s',
        body: 'I hold biweekly sync-ups with each engineer, focused on skill development.',
    },
    {
        title: 'Feedback and growth',
        body: 'I write annual performance evaluations and use biweekly sync-ups to foster skill development.',
    },
    {
        title: 'Delivery',
        body: 'I serve as embedded scrum master, leading sprint planning and retrospectives. The team ships biweekly releases, and quarterly planning with cross-functional stakeholders went from two days to three hours.',
    },
    {
        title: 'Code quality and tech debt',
        body: 'I lead bi-monthly BDD test-process meetings and drove adoption of a shared testing repository across 100+ engineers. I also write Cursor rules that enforce architectural patterns for the team.',
    },
]

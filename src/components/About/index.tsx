import React from 'react'
import Headshot from '../../static/img/headshot.jpg'
import { HeadshotImage } from './styled'
import { PageContainer, PageContent, PageTitle } from '../styled'
import SocialMediaLinks from '../SocialMediaLinks'

const bioParagraphs = [
    "I'm a software engineering lead with broad expertise in full stack software development and architecture. I specialize in guiding engineers to deliver high impact software releases while fostering a culture of collaboration and continuous improvement.",
    "Throughout my career, I have consistently developed high quality code, led software teams, and mentored developers. My focus as an engineer is on building clean, well documented codebases, implementing extensive automated testing, and designing modern systems. My focus as a leader is on developer growth, resolving workflow inefficiencies, and aligning product goals with technical requirements.",
    "I'm always interested in connecting with others who share a passion for technology and leadership. If you're interested in discussing all things tech, feel free to reach out!"
]

const About = () => {
    return (
        <main>
            <PageContainer>
                <div className='blocks about'>
                    <PageTitle>About Me</PageTitle>
                    <PageContent>
                        <HeadshotImage src={Headshot} />
                        <div>
                            {bioParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <SocialMediaLinks />
                    </PageContent>
                </div>
            </PageContainer>
        </main>
    )
}

export default About

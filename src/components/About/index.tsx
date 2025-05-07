import React from 'react'
import Headshot from '../../static/img/headshot.jpg'
import { HeadshotImage } from './styled'
import { PageContainer, PageContent, PageTitle } from '../styled'
import SocialMediaLinks from '../SocialMediaLinks'

const bioParagraphs = [
    "For as long as I can remember, I've been captivated by technology and its power to solve real-world problems. This passion has driven my career in the tech industry, where I've had the privilege of leading high-performing teams focused on creating innovative solutions.",
    "My core expertise lies in full stack development, particularly with React.js on the front-end and Node.js on the back-end. I also have extensive experience with PostgreSQL, as well as mobile app development using Objective-C and Java. Over the years, I've continually expanded my skillset, staying ahead of emerging technologies and frameworks to ensure the highest quality software in every project I lead.",
    "Lately, I've become deeply passionate about the intersection of technology and sustainability. I'm especially focused on climate tech solutions that accelerate the transition to a net-zero emissions future. My experience working with teams dedicated to electric vehicle adoption has reinforced my belief in the transformative power of tech to address the global climate crisis. I'm excited to be part of a growing movement that uses technology to create cleaner, more sustainable systems whether that be in transportation, energy, or beyond.",
    "I'm always eager to connect with like-minded professionals who share a passion for technology and sustainability. If you're interested in discussing software development or climate tech, feel free to reach out!",
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

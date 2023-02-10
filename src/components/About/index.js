import React from 'react'

//Assets
import Headshot from '../../static/img/headshot.jpg'
import LinkedIn from '../../static/img/linkedin.png'
import GitHub from '../../static/img/github.png'
import { HeadshotImage, LinkIcon, LinksContainer } from './styled'

const bioParagraphs = [
    "For as long as I can remember I have been fascinated by technology and it's real world applications. This fascination is what originally sparked my interest in computer programming. Like most people though, I always felt a bit intimidated by the idea of programming growing up. It wasn't until I was a young adult that I found the courage to actually tackle it head on. I first learned to code at a bootcamp and then moved on to an online program, which ultimately led to me to my first internship. Since then I have been absolutely loving the experience of working as a software engineer!",
    "My main expertise is in full stack development where I have worked primarily with React.js applications on the front-end, and Express.js and Django applications on the backend. Additionally, I have spent some time working on mobile applications using Objective-C and Java. With that said, my skillset is ever evolving and I am always interested in learning new languages, frameworks, and developing for new platforms. Regardless of what software I'm working on, my goal is to be exceptional at what I do and strive to maintain the highest level of code quality in the work I produce.",
    "I love connecting with like minded individuals so please message me on LinkedIn (link in button below) if you're interested in talking more about all things software and tech related!",
]

const About = () => {
    return (
        <div>
            <div className="content main">
                <div className="blocks about">
                    <h3
                        className="featured-work-title"
                        style={{ padding: '30px', paddingBottom: '20px' }}
                    >
                        About Me
                    </h3>
                    <div
                        style={{
                            margin: '40px',
                            marginTop: '0px',
                            textIndent: '25px',
                        }}
                    >
                        <HeadshotImage src={Headshot} />
                        <div>
                            {bioParagraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <LinksContainer>
                            <a
                                href="https://www.linkedin.com/in/jessehoffmann/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkIcon src={LinkedIn} />
                            </a>
                            <a
                                href="https://github.com/jessehoffmann"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkIcon src={GitHub} />
                            </a>
                        </LinksContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

import Backpacking from '../../static/img/backpacking.jpg'
import Espresso from '../../static/img/espresso.jpg'
import SurfersSunset from '../../static/img/surfers-sunset.jpg'

export const aboutBio = [
    "I'm a software engineering lead with broad expertise in full-stack software development and architecture. I specialize in optimizing development processes and guiding engineers to deliver high quality software while fostering a culture of collaboration and continuous improvement.",
    "Throughout my career, I've naturally gravitated toward leadership through leading software teams, designing systems, and mentoring developers. As an engineer, I focus on building clean, well-documented codebases, implementing comprehensive automated testing, and designing modern, maintainable systems. As a leader, I focus on developing engineers, resolving workflow inefficiencies, and aligning product goals with sound technical decisions.",
    "I'm always interested in connecting with others. If you share a passion for health or climate technology, love spending time outdoors, or are a third-wave coffee geek like me, please reach out!",
]

export const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jessehoffmann/',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/jessehoffmann',
    },
]

export const outsideIntro =
    "Away from the keyboard, you'll find me on a trail, behind a camera, or dialing in a coffee."

type Interest = {
    title: string
    caption: string
    image?: string
    imagePosition?: string
    photoAlt?: string
    photoLabel?: string
    linkLabel?: string
    href?: string
}

export const interests: Interest[] = [
    {
        title: 'Backpacking',
        image: Backpacking,
        imagePosition: 'center 65%',
        photoAlt:
            'Jesse Thomas Hoffmann backpacking in the Fjallabak Nature Reserve',
        caption:
            'One of my favorite trips in recent years: the Fjallabak Nature Reserve in Iceland.',
    },
    {
        title: 'Photography',
        image: SurfersSunset,
        imagePosition: 'center 62%',
        photoAlt: 'Two surfers carrying boards along a cliff at sunset',
        caption:
            'My creative outlet is landscape photography. It brings me closer to nature, and I love capturing the emotion of a moment in time.',
    },
    {
        title: 'Coffee',
        image: Espresso,
        imagePosition: 'center 32%',
        photoAlt: 'Jesse Thomas Hoffmann holding a glass of espresso',
        caption:
            "Yes, I'm that guy with way too much coffee gear in his kitchen. Funky and fruity third-wave coffee is my jam, preferably brewed as a pour-over.",
    },
]

export const photoCredit = 'The landscape photos on this site are my own.'

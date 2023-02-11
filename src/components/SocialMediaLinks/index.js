import React from 'react'

//Assets
import LinkedIn from '../../static/img/linkedin.png'
import GitHub from '../../static/img/github.png'
import { LinkIcon, LinksContainer } from './styled'

const SocialMediaLinks = () => {
    return (
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
    )
}

export default SocialMediaLinks

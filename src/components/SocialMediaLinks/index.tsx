import React from 'react'

//Assets
import LinkedIn from '../../static/img/linkedin.png'
import GitHub from '../../static/img/github.png'
import { LinkIcon, LinksContainer } from './styled'
import { ButtonBase } from '@mui/material'

const SocialMediaLinks = () => {
    return (
        <LinksContainer>
            <ButtonBase sx={{ m: 3 }}>
                <a
                    href='https://www.linkedin.com/in/jessehoffmann/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <LinkIcon src={LinkedIn} />
                </a>
            </ButtonBase>
            <ButtonBase sx={{ m: 3 }}>
                <a
                    href='https://github.com/jessehoffmann'
                    target='_blank'
                    rel='noreferrer'
                >
                    <LinkIcon src={GitHub} />
                </a>
            </ButtonBase>
        </LinksContainer>
    )
}

export default SocialMediaLinks

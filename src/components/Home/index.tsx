import React from 'react'

//Assets
import Landscape from '../../static/img/landscape.jpg'
import LandscapeSmall from '../../static/img/landscape-small.jpg'

import {
    FeaturedWorkContainer,
    MainCoverImage,
    ProjectDescription,
    ProjectDescriptionBulletPoints,
    ProjectDescriptionFlexItem,
    ProjectImage,
    ProjectImageFlexItem,
    ProjectLinkFlexContainer,
    ProjectTitle,
} from './styled'
import { PageTitle } from '../styled'
import { projectsList } from './data'

const Home = () => {
    return (
        <main>
            <MainCoverImage
                alt='main-image'
                preview={LandscapeSmall}
                src={Landscape}
                bgColor='transparent'
                className=''
            />
            <FeaturedWorkContainer>
                <PageTitle>My Featured Coding Projects</PageTitle>
                <div className='flex-container'>
                    {projectsList.map((project, index) => (
                        <div className={`blocks project${index}`} key={index}>
                            <ProjectLinkFlexContainer
                                href={project.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <ProjectDescriptionFlexItem>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>
                                        {project.description}
                                    </ProjectDescription>
                                    {project.details?.map((detail, index) => (
                                        <ProjectDescriptionBulletPoints
                                            key={index}
                                        >
                                            {detail}
                                        </ProjectDescriptionBulletPoints>
                                    ))}
                                </ProjectDescriptionFlexItem>
                                <ProjectImageFlexItem>
                                    <ProjectImage
                                        alt={project.title}
                                        preview={project.preview}
                                        src={project.image}
                                        bgColor='transparent'
                                        className=''
                                    />
                                </ProjectImageFlexItem>
                            </ProjectLinkFlexContainer>
                        </div>
                    ))}
                </div>
            </FeaturedWorkContainer>
        </main>
    )
}

export default Home

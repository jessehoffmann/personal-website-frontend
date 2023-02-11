import React from 'react'

//Assets
import Landscape from '../../static/img/daylight.jpg'
import Catalog from '../../static/img/catalog.jpg'
import Movie from '../../static/img/movie.jpg'
import Map from '../../static/img/map.jpg'
import Portfolio from '../../static/img/portfolio.jpg'
import {
    FeaturedWorkContainer,
    MainCoverImage,
    ProjectDescriptionFlexItem,
    ProjectImage,
    ProjectImageFlexItem,
    ProjectLinkFlexContainer,
    ProjectTitle,
} from './styled'
import { PageTitle } from '../styled'

const projectsList = [
    {
        link: 'https://github.com/jessehoffmann/Personal-Website',
        image: Portfolio,
        title: 'Portfolio',
        description:
            "The website you're looking at right now! This S3 bucket based website was built with React and utilizes",
        details: [
            '• AWS Cloudfront for securing connections',
            '• AWS Codepipline for automatic deployment',
            '• React Router for page routing',
            '• Formspree API for secure emails through contact page',
        ],
    },
    {
        link: 'https://github.com/jessehoffmann/Catalog/tree/master/catalog',
        image: Catalog,
        title: 'Catalog',
        description:
            'This application was designed for catalog-style record keeping. Features include:',
        details: [
            '• Runs on vagrant for creating virtual development environment',
            '• Built with Python Flask framework',
            '• Uses SQLAlchemy for object-relational mapping',
            '• Ensures secure user authorization with OAutho 2.0',
        ],
    },
    {
        link: 'https://github.com/jessehoffmann/Neighborhood-Map',
        image: Movie,
        title: 'Movie Trailers',
        description:
            "Simple full stack application that uses Python's object-oriented style programming and simple HTML/CSS to display trailers of my favorite movies.",
    },
    {
        link: 'https://github.com/jessehoffmann/Movie-Trailer-Website',
        image: Map,
        title: 'Map',
        description:
            'Javascript application that utilizes Knockout.js features of date-binding and automatic UI refresh. It also takes advantages of Ajax (jQuery) for API requests.',
    },
]

const Home = () => {
    return (
        <div>
            <div className="content" style={{ backgroundColor: 'inherit' }}>
                <MainCoverImage src={Landscape} />
                <FeaturedWorkContainer>
                    <PageTitle>My Featured Coding Projects</PageTitle>
                    <div className="flex-container">
                        {projectsList.map((project, index) => (
                            <div
                                className={`blocks project${index}`}
                                key={index}
                            >
                                <ProjectLinkFlexContainer
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ProjectDescriptionFlexItem>
                                        <ProjectTitle>
                                            {project.title}
                                        </ProjectTitle>
                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                        {project.details?.map(
                                            (detail, index) => (
                                                <p
                                                    className="project-description-bulletpoints"
                                                    key={index}
                                                >
                                                    {detail}
                                                </p>
                                            )
                                        )}
                                    </ProjectDescriptionFlexItem>
                                    <ProjectImageFlexItem>
                                        <ProjectImage
                                            alt={project.title}
                                            src={project.image}
                                        />
                                    </ProjectImageFlexItem>
                                </ProjectLinkFlexContainer>
                            </div>
                        ))}
                    </div>
                </FeaturedWorkContainer>
            </div>
        </div>
    )
}

export default Home

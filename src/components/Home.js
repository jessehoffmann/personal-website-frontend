import React, { Component } from 'react'

//Assets
import Landscape from '../static/img/daylight.jpg'
import Catalog from '../static/img/catalog.jpg'
import Movie from '../static/img/movie.jpg'
import Map from '../static/img/map.jpg'
import Website from '../static/img/website.jpg'
import Portfolio from '../static/img/portfolio.jpg'

//Styles
import '../static/css/portfolio_style.css'

import NavBar from './NavBar'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolling: true,
        }
    }
    s

    render() {
        return (
            <div>
                <div className="content" style={{ backgroundColor: 'inherit' }}>
                    {<img className="main-image" src={Landscape} />}
                    <div
                        className="featured-work"
                        style={{ backgroundColor: 'inherit' }}
                    >
                        <h3 className="featured-work-title">
                            My Featured Coding Projects
                        </h3>
                        <div className="flex-container">
                            <div className="flex-container">
                                {/*Test*/}
                                <div className="blocks project4">
                                    <a
                                        href="https://github.com/jessehoffmann/Personal-Website"
                                        target="_blank"
                                    >
                                        <img
                                            className="thumbnails"
                                            alt="Website"
                                            src={Portfolio}
                                        />
                                        <div style={{ width: '40%' }}>
                                            <h4 className="project-titles">
                                                Portfolio
                                            </h4>
                                            <p className="project-description">
                                                The website you're looking at
                                                right now! This S3 bucket based
                                                website was built with React and
                                                utilizes:
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • AWS Cloudfront for securing
                                                connections
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • AWS Codepipline for automatic
                                                deployment
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • React Router for page routing
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • Formspree API for secure
                                                emails through contact page
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="blocks project1">
                                    <a
                                        href="https://github.com/jessehoffmann/Catalog/tree/master/catalog"
                                        target="_blank"
                                    >
                                        <img
                                            className="thumbnails"
                                            alt="Catalog"
                                            src={Catalog}
                                        />
                                        <div style={{ width: '40%' }}>
                                            <h4 className="project-titles">
                                                Catalog
                                            </h4>
                                            <p className="project-description">
                                                This application was designed
                                                for catalog-style record
                                                keeping. Features include:
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • Runs on vagrant for creating
                                                virtual development environment
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • Built with Python Flask
                                                framework
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • Uses SQLAlchemy for
                                                object-relational mapping
                                            </p>
                                            <p className="project-description-bulletpoints">
                                                • Ensures secure user
                                                authorization with OAutho 2.0
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="blocks project2">
                                    <a
                                        href="https://github.com/jessehoffmann/Movie-Trailer-Website"
                                        target="_blank"
                                    >
                                        <img
                                            className="thumbnails"
                                            alt="Movie"
                                            src={Movie}
                                        />
                                        <h4 className="project-titles">
                                            Movie Trailer
                                        </h4>
                                        <div style={{ width: '40%' }}>
                                            <p className="project-description">
                                                Simple full stack application
                                                that uses Python's
                                                object-oriented style
                                                programming and simple HTML/CSS
                                                to display trailers of my
                                                favorite movies.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="blocks project3">
                                    <a
                                        href="https://github.com/jessehoffmann/Neighborhood-Map"
                                        target="_blank"
                                    >
                                        <img
                                            className="thumbnails"
                                            alt="Map"
                                            src={Map}
                                        />
                                        <h4 className="project-titles">
                                            Neighborhood Map
                                        </h4>
                                        <div style={{ width: '40%' }}>
                                            <p className="project-description">
                                                Javascript application that
                                                utilizes Knockout.js features of
                                                date-binding and automatic UI
                                                refresh. It also takes
                                                advantages of Ajax (jQuery) for
                                                API requests.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

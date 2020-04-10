import React, { Component } from 'react';

//Assets
import Landscape from '../static/img/daylight.jpg';
import Catalog from '../static/img/catalog.jpg';
import Movie from '../static/img/movie.jpg';
import Map from '../static/img/map.jpg';
import Website from '../static/img/website.jpg';
import Portfolio from '../static/img/portfolio.jpg';

//Styles
import '../static/css/portfolio_style.css';

import NavBar from './NavBar';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolling: true
        }

    };s

    render() {        
        return (
            <div>
                <div className="content">
                    <img className="main-image" src={Landscape} />
                    <div class="featured-work">
                        <h3 class="featured-work-title">My Featured Coding Projects</h3>
                        <div class="flex-container">
                            <div class="flex-container">
                                {/*Test*/}
                                <div class="blocks project4">
                                    <a href="https://github.com/jessehoffmann/Personal-Website" target="_blank">
                                        <img class="thumbnails" alt="Website" src={Portfolio} />
                                        <h4 class="project-titles">Portfolio</h4>
                                        <p class="project-description">The website you're looking at right now! This S3 bucket based website was built with React, react-router-dom for page routing, and AWS Cloudfront for securing connections.</p>
                                    </a>
                                </div>
                                <div class="blocks project1">
                                    <a href="https://github.com/jessehoffmann/Catalog/tree/master/catalog" target="_blank">
                                        <img class="thumbnails" alt="Catalog" src={Catalog} />
                                        <h4 class="project-titles">Catalog</h4>
                                        <p class="project-description">Database oriented application built with Python Flask framework.</p>
                                    </a>
                                </div>
                                <div class="blocks project2">
                                    <a href="https://github.com/jessehoffmann/Movie-Trailer-Website" target="_blank">
                                        <img class="thumbnails" alt="Movie" src={Movie} />
                                        <h4 class="project-titles">Movie Trailer</h4>
                                        <p class="project-description">Simple full stack the uses Python object-oriented style programming to display trailers of my favorite movies.</p>
                                    </a>
                                </div>
                                <div class="blocks project3">
                                    <a href="https://github.com/jessehoffmann/Neighborhood-Map" target="_blank">
                                        <img class="thumbnails" alt="Map" src={Map} />
                                        <h4 class="project-titles">Neighborhood Map</h4>
                                        <p class="project-description">Javascript application that utilizes Flask framework and Ajax (jQuery).</p>
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

export default Home;
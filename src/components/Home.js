import React, { Component } from 'react';

//Assets
import Landscape from '../static/img/daylight.jpg';
import Catalog from '../static/img/catalog.jpg';
import Movie from '../static/img/movie.jpg';
import Map from '../static/img/map.jpg';
import Website from '../static/img/website.jpg';

//Styles
import '../static/css/portfolio_style.css';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolling: true
        }

        //this.handleScroll = this.handleScroll.bind(this)
    };
    /*

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll(event) {
        let scroll = event.srcElement.body.scrollTop,
            //offset = event.srcElement.header.offset.top,
            itemTranslate = Math.min(0, scroll/3 - 60)

        console.log(scroll);
    
        if (offset != null && scroll > offset) {
            this.setState({
                scrolling: true
            })
        } else {
            this.setState({
                scrolling: true
            })
        }
        
    }
    */


    render() {
        const { scrolling } = this.state;
        
        return (
            <div>
                <div className="content">
                    <div class="header">
                        <header className="sticky">
                            <div class="center-header">
                                <h1 class="header-title">Jesse Thomas Hoffmann</h1>
                            </div>
                        </header>
                    </div>
                    <img className="main-image" src={Landscape} />
                    <div class="featured-work">
                        <h3 class="featured-work-title">Featured Coding Projects</h3>
                        <div class="flex-container">
                            <div class="flex-container">
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
                                <div class="blocks project4">
                                    <a href="https://github.com/jessehoffmann/Personal-Website" target="_blank">
                                        <img class="thumbnails" alt="Website" src={Website} />
                                        <h4 class="project-titles">Portfolio Website</h4>
                                        <p class="project-description">This website! My personal front-end website built with React/Redux and AWS S3.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p class="footer-text">Jesse Thomas Hoffmann</p>
                        <p class="footer-texttwo">Software Developer</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Home;
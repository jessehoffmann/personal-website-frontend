import Catalog from '../../static/img/catalog.jpg'
import CatalogSmall from '../../static/img/catalog-small.jpg'
import Movie from '../../static/img/movie.jpg'
import MovieSmall from '../../static/img/movie-small.jpg'
import Map from '../../static/img/map.jpg'
import MapSmall from '../../static/img/map-small.jpg'
import Portfolio from '../../static/img/portfolio.jpg'
import PortfolioSmall from '../../static/img/portfolio-small.jpg'

export const projectsList = [
    {
        link: 'https://github.com/jessehoffmann/Personal-Website',
        image: Portfolio,
        preview: PortfolioSmall,
        title: 'Portfolio',
        description:
            "The website you're looking at right now! This React based website is deployed with AWS Amplify and utilizes",
        details: [
            '• React Router for page routing',
            '• Custom CSS for all designs including mobile responsiveness',
            '• Formspree API for secure emails through contact page',
        ],
    },
    {
        link: 'https://github.com/jessehoffmann/Catalog/tree/master/catalog',
        image: Catalog,
        preview: CatalogSmall,
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
        link: 'https://github.com/jessehoffmann/Movie-Trailer-Website',
        image: Movie,
        preview: MovieSmall,
        title: 'Movie Trailers',
        description:
            "Simple full stack application that uses Python's object-oriented style programming and simple HTML/CSS to display trailers of my favorite movies.",
    },
    {
        link: 'https://github.com/jessehoffmann/Neighborhood-Map',
        image: Map,
        preview: MapSmall,
        title: 'Map',
        description:
            'Javascript application that utilizes Knockout.js features of date-binding and automatic UI refresh. It also takes advantages of Ajax (jQuery) for API requests.',
    },
]
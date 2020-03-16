import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Assets
import Monogram from '../static/img/monogram.png';

//Styles
import '../static/css/portfolio_style.css';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolling: false
        }

        this.handleScroll = this.handleScroll.bind(this)
    };
    

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    handleScroll(event) {
        let scroll = event.srcElement.body.scrollTop,
            offset = window.scrollY

        console.log(offset);
    
        if (offset > 0) {
            this.setState({
                scrolling: true
            })
        } else {
            this.setState({
                scrolling: false
            })
        }
        
    }
    


    render() {
        const { scrolling } = this.state;
        
        return (
            <div>
                <header className={scrolling ? "sticky" : null}>
                    <div className="center-header">
                        <Link to="/">
                            <img src={Monogram} style={{height: "50px", width:"50px", marginLeft: "20px", marginTop: "4px", objectFit: "contain"}} />
                        </Link>

                            <h1 className="header-title">
                                Jesse Thomas Hoffmann
                            </h1>
                        {/*
                        <h3 className="header-links">
                            <a href="https://jessehoffmann.kw.com" target="_blank">REALTOR®</a>
                        </h3>
                        */}
                        <h3 className="header-links">
                            <Link to="/about">About</Link>
                        </h3>
                    </div>
                </header>
            </div>
        )
    }
}

export default NavBar;
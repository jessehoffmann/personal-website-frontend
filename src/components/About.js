import React, { Component } from 'react';

//Assets
import Monogram from '../static/img/monogram.jpg';
import Profile from '../static/img/profile.jpg';
import LinkedIn from '../static/img/linkedin.png';
import Facebook from '../static/img/facebook.png';
import Instagram from '../static/img/instagram.png';
import Realtor from '../static/img/realtor.png';

//Styles
import '../static/css/portfolio_style.css';

import NavBar from './NavBar';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    };

    render() {        
        return (
            <div>
                <div className="content main">
                    <div className="blocks about">
                        <h3 className="featured-work-title" style={{padding:"30px", paddingBottom:"20px"}}>About Me</h3>
                        <div style={{margin:"40px", marginTop:"0px", textIndent:"20px"}}>
                            <img src={Profile} style={{width:"200px", height: "250px", float:"left", marginLeft: "50px", marginRight: "60px", marginBottom: "30px", objectFit: "cover", borderRadius: "15px"}} />
                            <div >
                                <p>
                                    Jesse Thomas Hoffmann was born in Valencia, California and raised in Thousand Oaks. After graduating from Thousand Oaks High School, he attended the University of California – Berkeley where he studied computer science and developed a love for real estate.
                                </p>
                                <p>
                                    While in school, Jesse enhanced his interpersonal skills through working as both a solar energy consultant and running his very own clothing business. After school, Jesse continued to pursue computer science full-time. He has since been working as a mobile app developer for a software company that helps people through their car buying process.
                                </p>
                                <p>
                                    Jesse’s skills reach across the board and his ability to work with others and command a social environment is unparalleled. His mission is to provide the highest quality of service to his clients and ensure a worry-free home buying process.
                                </p>
                            </div>
                            <div style={{width: "310px", margin:"auto", marginTop: "30px"}}>
                                <a href="https://www.linkedin.com/in/jessehoffmann/" target="_blank">
                                    <img src={LinkedIn} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                <a href="https://www.facebook.com/Jesse-Thomas-Hoffmann-Realtor-103150977970315/?modal=admin_todo_tour" target="_blank">
                                    <img src={Facebook} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                <a href="https://www.instagram.com/jessehoffmannrealtor/" target="_blank">
                                    <img src={Instagram} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                {/*}
                                <a href="https://www.facebook.com/Jesse-Thomas-Hoffmann-Realtor-103150977970315/?modal=admin_todo_tour" target="_blank">
                                    <img src={Realtor} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
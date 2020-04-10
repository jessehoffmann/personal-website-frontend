import React, { Component } from 'react';

//Assets
import Monogram from '../static/img/monogram.png';
import Profile from '../static/img/profile.jpg';
import Headshot from '../static/img/headshot.jpg';
import LinkedIn from '../static/img/linkedin.png';
import Facebook from '../static/img/facebook.png';
import Instagram from '../static/img/instagram.png';
import Realtor from '../static/img/realtor.png';
import GitHub from '../static/img/github.png';

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
                        <div style={{margin:"40px", marginTop:"0px", textIndent:"25px"}}>
                            <img src={Headshot} style={{width:"200px", height: "250px", float:"left", marginLeft: "50px", marginRight: "60px", marginBottom: "30px", objectFit: "cover", borderRadius: "15px"}} />
                            <div>
                                <p>
                                    Jesse Thomas Hoffmann was born in Valencia, California and raised in Thousand Oaks. After graduating from Thousand Oaks High School, he attended the University of California – Berkeley where he studied computer science.
                                </p>
                                <p>
                                    While in school, Jesse enhanced his developer skills by attending 42 School US in Fremont, CA. During the four week intensive training bootcamp, he learned the fundamentals of the C programming language and developed excellent team working skills while immersing himself in the pedagogical environment.
                                </p>
                                <p>
                                    After attending Berkeley for some time, Jesse went on to continue his education by receiving a Full Stack Web Development nanodegree through Udacity's online learning program. During this time he gained valuable skills for creating server-based and mobile-friendly web applications.
                                </p>
                                <p>
                                    After completing his studies Jesse began working for VegVists as a web development intern where he quickly learned the fundamentals of React and EC2 server development. He has since been working as a software developer and QA lead for Green Light Labs in Camarillo, CA; developing and maintaining mobile and web applications that help people through their car buying process.
                                </p>
                            </div>
                            <div style={{width: "225px", margin:"auto", marginTop: "30px"}}>
                                <a href="https://www.linkedin.com/in/jessehoffmann/" target="_blank">
                                    <img src={LinkedIn} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                <a href="https://github.com/jessehoffmann" target="_blank">
                                    <img src={GitHub} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                {/*}
                                <a href="https://www.instagram.com/jessehoffmannrealtor/" target="_blank">
                                    <img src={Instagram} style={{width:"50px", height:"50px", margin: "20px"}}/>
                                </a>
                                
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
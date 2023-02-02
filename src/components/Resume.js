import React, { Component } from 'react'

//Assets
import OfficialResume from '../static/Jesse Hoffmann Resume.pdf'

//Styles
import '../static/css/portfolio_style.css'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="content main">
                    <embed
                        src={OfficialResume}
                        width="100%"
                        height="1200px"
                        type="application/pdf"
                    />
                </div>
            </div>
        )
    }
}

export default About

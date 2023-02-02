import React, { Component } from 'react'

//Styles
import '../static/css/portfolio_style.css'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrolling: true,
        }
    }

    render() {
        return (
            <div>
                <footer>
                    <p className="footer-text">Jesse Thomas Hoffmann</p>
                    <br />
                    <p className="footer-text-three">Software Developer</p>
                </footer>
            </div>
        )
    }
}

export default Footer

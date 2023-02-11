import React from 'react'

//Assets
import OfficialResume from '../../static/Jesse Hoffmann Resume.pdf'

const Resume = () => {
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

export default Resume

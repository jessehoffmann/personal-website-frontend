import React from 'react'

//Assets
import LinkedIn from '../static/img/linkedin.png'
import GitHub from '../static/img/github.png'

import MyForm from './MyForm'
import { PageTitle } from './styled'

const Contact = () => {
    return (
        <div>
            <div className="content main">
                <div className="blocks about">
                    <PageTitle
                        style={{ padding: '30px', paddingBottom: '0px' }}
                    >
                        Contact Me
                    </PageTitle>
                    <div
                        style={{
                            margin: '40px',
                            marginTop: '0px',
                            textIndent: '25px',
                        }}
                    >
                        <div>
                            <MyForm />
                        </div>
                        <div
                            style={{
                                width: '225px',
                                margin: 'auto',
                                marginTop: '30px',
                            }}
                        >
                            <a
                                href="https://www.linkedin.com/in/jessehoffmann/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={LinkedIn}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '20px',
                                    }}
                                />
                            </a>
                            <a
                                href="https://github.com/jessehoffmann"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={GitHub}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        margin: '20px',
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

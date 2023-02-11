import React from 'react'
import ContactForm from '../ContactForm'
import { PageTitle } from '../styled'
import SocialMediaLinks from '../SocialMediaLinks'

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
                            <ContactForm />
                        </div>
                        <SocialMediaLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

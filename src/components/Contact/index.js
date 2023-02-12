import React from 'react'
import ContactForm from '../ContactForm'
import { PageContainer, PageContent, PageTitle } from '../styled'
import SocialMediaLinks from '../SocialMediaLinks'

const Contact = () => {
    return (
        <main>
            <PageContainer>
                <div className='blocks about'>
                    <PageTitle>Contact Me</PageTitle>
                    <PageContent>
                        <ContactForm />
                        <SocialMediaLinks />
                    </PageContent>
                </div>
            </PageContainer>
        </main>
    )
}

export default Contact

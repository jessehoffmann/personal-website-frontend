import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'Jesse Thomas Hoffmann'

const pages: Record<string, { title: string; description: string }> = {
    '/': {
        title: siteName,
        description:
            'Jesse Thomas Hoffmann is a software engineering leader focused on process, quality, and developer growth.',
    },
    '/about': {
        title: `About | ${siteName}`,
        description:
            'Who Jesse Thomas Hoffmann is at work and away from it: engineering leader, backpacker, photographer, and coffee lover.',
    },
    '/experience': {
        title: `Experience | ${siteName}`,
        description:
            'Where Jesse Thomas Hoffmann has led teams, what changed, and how he works, including delivery, architecture, and quality.',
    },
    '/skills': {
        title: `Skills | ${siteName}`,
        description:
            'Leadership skills and the technology Jesse Thomas Hoffmann works in, from mentoring and delivery to coding languages and frameworks.',
    },
    '/contact': {
        title: `Contact | ${siteName}`,
        description:
            'The quickest ways to reach Jesse Thomas Hoffmann: email, LinkedIn, GitHub, and a contact form.',
    },
}

const DocumentMeta = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const page = pages[pathname] ?? pages['/']
        document.title = page.title
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute('content', page.description)
    }, [pathname])

    return null
}

export default DocumentMeta

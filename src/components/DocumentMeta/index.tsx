import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteName = 'Jesse Thomas Hoffmann'
const siteUrl = 'https://jessehoffmann.com'

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
    '/photography': {
        title: `Photography | ${siteName}`,
        description:
            'Landscape photography by Jesse Thomas Hoffmann, from the Icelandic highlands to Pacific Northwest rain forests and the coast.',
    },
    '/contact': {
        title: `Contact | ${siteName}`,
        description:
            'The quickest ways to reach Jesse Thomas Hoffmann: email, LinkedIn, GitHub, and a contact form.',
    },
}

const setAttr = (selector: string, attr: string, value: string) => {
    document.querySelector(selector)?.setAttribute(attr, value)
}

const DocumentMeta = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const page = pages[pathname] ?? pages['/']
        const url = `${siteUrl}${pages[pathname] ? pathname : '/'}`

        document.title = page.title
        setAttr('meta[name="description"]', 'content', page.description)
        setAttr('link[rel="canonical"]', 'href', url)
        setAttr('meta[property="og:title"]', 'content', page.title)
        setAttr('meta[property="og:description"]', 'content', page.description)
        setAttr('meta[property="og:url"]', 'content', url)
        setAttr('meta[name="twitter:title"]', 'content', page.title)
        setAttr('meta[name="twitter:description"]', 'content', page.description)
    }, [pathname])

    return null
}

export default DocumentMeta

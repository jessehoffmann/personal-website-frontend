// Gallery images live in static/img/photography/gallery, one folder per photo:
//   <name>/<width>.avif   AVIF q80 4:4:4 at several widths (up to 3840px on the long edge)
//   <name>/fallback.webp  one 1920px WebP for browsers without AVIF support
// Vite fingerprints each file, so they can be cached forever.

const avifFiles = import.meta.glob(
    '../../static/img/photography/gallery/*/*.avif',
    { eager: true, query: '?url', import: 'default' }
) as Record<string, string>

const fallbackFiles = import.meta.glob(
    '../../static/img/photography/gallery/*/fallback.webp',
    { eager: true, query: '?url', import: 'default' }
) as Record<string, string>

type Source = { url: string; width: number }

const avifByName = new Map<string, Source[]>()
for (const [path, url] of Object.entries(avifFiles)) {
    const match = path.match(/\/([^/]+)\/(\d+)\.avif$/)
    if (!match) continue
    const [, name, width] = match
    const list = avifByName.get(name) ?? []
    list.push({ url, width: Number(width) })
    avifByName.set(name, list)
}
avifByName.forEach((list) => list.sort((a, b) => a.width - b.width))

const fallbackByName = new Map<string, string>()
for (const [path, url] of Object.entries(fallbackFiles)) {
    const match = path.match(/\/([^/]+)\/fallback\.webp$/)
    if (match) fallbackByName.set(match[1], url)
}

/** `srcset` value listing every AVIF width for a photo. */
export const avifSrcSet = (name: string) =>
    (avifByName.get(name) ?? [])
        .map(({ url, width }) => `${url} ${width}w`)
        .join(', ')

/** Single WebP used as the <img> src for browsers without AVIF. */
export const fallbackSrc = (name: string) => fallbackByName.get(name) ?? ''

/** Grid tiles: about 1/3 of the 1000px column on desktop, full width on phones. */
export const gridSizes =
    '(min-width: 1048px) 320px, (min-width: 800px) 31vw, (min-width: 600px) 47vw, calc(100vw - 32px)'

/**
 * Viewer: the photo fits inside the viewport (minus the caption bar), so its
 * rendered width depends on its aspect ratio as well as the window size.
 */
export const viewerSizes = (width: number, height: number) => {
    if (typeof window === 'undefined') return '100vw'
    const maxW = window.innerWidth - 16
    const maxH = window.innerHeight - 140
    const rendered = Math.min(maxW, maxH * (width / height))
    return `${Math.max(1, Math.round(rendered))}px`
}

/** Warm the browser cache for a photo at the size the viewer will request. */
export const preloadViewerImage = (
    name: string,
    width: number,
    height: number
) => {
    const img = new Image()
    img.sizes = viewerSizes(width, height)
    img.srcset = avifSrcSet(name)
    img.src = fallbackSrc(name)
}

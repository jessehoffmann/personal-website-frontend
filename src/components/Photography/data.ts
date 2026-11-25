export type Photo = {
    /** Folder name in static/img/photography/gallery */
    name: string
    title: string
    location?: string
    alt: string
    /** Intrinsic size of the largest export, used for aspect ratio */
    width: number
    height: number
}

export const photographyIntro =
    'Landscape photography is my creative outlet. These are a few favorites from trails, coastlines, and cities along the way.'

export const photos: Photo[] = [
    {
        name: 'fjallabak',
        title: 'Fjallabak',
        location: 'Iceland',
        alt: 'Green volcanic peaks and a glacier-capped range above a river valley in the Fjallabak Nature Reserve',
        width: 2048,
        height: 1365,
    },
    {
        name: 'deschutes-frost',
        title: 'Frosted Ponderosa',
        location: 'Bend, Oregon',
        alt: 'A tall ponderosa pine coated in hoarfrost standing above a frosted forest under a clear blue sky',
        width: 1365,
        height: 2048,
    },
    {
        name: 'firefall',
        title: 'Firefall',
        location: 'Yosemite National Park, California',
        alt: 'Horsetail Fall glowing orange in the setting sun as it pours down a granite cliff',
        width: 2048,
        height: 1365,
    },
    {
        name: 'surfers-sunset',
        title: 'Golden Hour',
        location: 'Steamer Lane, Santa Cruz, California',
        alt: 'Two surfers carrying boards along a cliff at sunset',
        width: 2048,
        height: 1024,
    },
    {
        name: 'hoh',
        title: 'Hoh Rain Forest',
        location: 'Olympic National Park, Washington',
        alt: 'Moss-covered trees and ferns surrounding a still pool in a temperate rain forest',
        width: 2048,
        height: 1365,
    },
    {
        name: 'cliffs-of-moher',
        title: 'Cliffs of Moher',
        location: 'Ireland',
        alt: 'Sheer green-topped sea cliffs dropping into the Atlantic, with a sea stack and a stone tower on the edge',
        width: 1365,
        height: 2048,
    },
    {
        name: 'humboldt-lagoon',
        title: 'Humboldt Lagoon',
        location: 'California',
        alt: 'A calm, misty lagoon in black and white, framed by bare branches and forested shores',
        width: 2048,
        height: 1365,
    },
    {
        name: 'joshua-tree',
        title: 'Joshua Tree',
        location: 'Joshua Tree National Park, California',
        alt: 'A Joshua tree silhouetted against a pink and blue desert sunset',
        width: 1365,
        height: 2048,
    },
    {
        name: 'grandview',
        title: 'Grandview',
        location: 'Encinitas, California',
        alt: 'Palm trees and coastal brush overlooking the ocean in soft evening light',
        width: 2048,
        height: 1365,
    },
    {
        name: 'beetle',
        title: 'Hang Loose',
        alt: 'A vintage Volkswagen bus parked by the ocean with the sun setting through its windows',
        width: 2048,
        height: 1365,
    },
    {
        name: 'yosemite-sunset',
        title: 'Yosemite Sunset',
        location: 'Yosemite National Park, California',
        alt: 'A granite peak lit by late-day sun above snow-dusted ridges and pine forest',
        width: 2048,
        height: 1365,
    },
    {
        name: 'hawk',
        title: 'Red-shouldered Hawk',
        alt: 'A red-shouldered hawk perched on a bare branch against green foliage',
        width: 1365,
        height: 2048,
    },
    {
        name: 'walk-on-the-beach',
        title: 'A Walk on the Beach',
        location: 'Carlsbad, California',
        alt: 'Two people walking along the shoreline below a green coastal bluff',
        width: 2048,
        height: 1365,
    },
    {
        name: 'santa-cruz-coast',
        title: 'Santa Cruz Coast',
        location: 'Santa Cruz, California',
        alt: 'A sandy beach and crashing surf below tall coastal bluffs, framed by pine branches',
        width: 1365,
        height: 2048,
    },
    {
        name: 'seattle',
        title: 'Seattle Skyline',
        location: 'Seattle, Washington',
        alt: 'The Seattle skyline and Space Needle beyond a stretch of green trees under puffy clouds',
        width: 2048,
        height: 1365,
    },
    {
        name: 'lone-tree',
        title: 'Lone Cypress',
        location: 'Pebble Beach, California',
        alt: 'A lone cypress on a rocky outcrop above the ocean, with mountains across the bay',
        width: 2048,
        height: 1365,
    },
    {
        name: 'ginkaku-ji',
        title: 'Canopy Light',
        location: 'Kyoto, Japan',
        alt: 'Sunlight filtering through bright green maple trees onto a carpet of moss in the Ginkaku-ji temple garden',
        width: 2559,
        height: 3839,
    },
]

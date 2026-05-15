export interface SanityImage {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
    crop?: {
        top: number
        bottom: number
        left: number
        right: number
    }
    hotspot?: {
        x: number
        y: number
        height: number
        width: number
    }
}

export interface Project {
    _id: string
    title: string
    slug: { current: string }
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
    image: SanityImage
    orderRank: number
}
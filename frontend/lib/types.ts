export interface Project {
    _id: string
    title: string
    slug: { current: string }
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    featured: boolean
    image: any
    orderRank: number
}
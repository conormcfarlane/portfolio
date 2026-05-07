export const allProjectsQuery = `*[_type == "project"]{
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured,
}`;
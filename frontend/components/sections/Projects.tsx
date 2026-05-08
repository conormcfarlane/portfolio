import React from 'react'
import { allProjectsQuery } from '@/lib/queries'
import { client } from '@/lib/sanity'
import { Project } from '@/lib/types'

export default async function Projects() {
    console.log("PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
    const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
    return (
        <div>
            {projects.length > 0 ? 'Projects loaded' : 'No projects yet'}
            {projects.map((project) => (
                <div key={project._id}>
                    {project.title}
                </div>

            ))}
        </div>
    )
}

import React from 'react'
import { allProjectsQuery } from '@/lib/queries'
import { client } from '@/lib/sanity'
import { Project } from '@/lib/types'

export default async function Projects() {
    console.log("PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
    const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
    return (
        <section id='projects'>
            <p className='text-center text-5xl mb-4 text-white'>Projects <span className='text-accent text-7xl'>.</span></p>
            {projects.length > 0 ? 'Projects loaded' : 'No projects yet'}
            <div>
                {projects.map((project) => (
                    <div key={project._id} className='flex gap-4'>
                        <div>img</div>
                        <div><p className='text-white text-lg' >{project.title}</p>
                            <p>{project.description}</p>
                            <div className='flex gap-4'>
                                {project.technologies.map((tech) => {
                                    return (
                                        <div key={tech} className='bg-teal-400/10 rounded-xl w-fit '>
                                            <p className='px-5 py-1 text-accent'>{tech}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </section >
    )
}

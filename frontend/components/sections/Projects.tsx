import React from 'react'
import { client } from '@/lib/sanity'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { urlFor } from '@/lib/image'
export default async function Projects() {
    console.log("PROJECT ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
    console.log("DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
    const projects = await client.fetch<Project[]>(`*[_type == "project"]`);
    return (
        <section id='projects'>
            <p className='text-center text-4xl mb-4 text-white'>Projects <span className='text-accent text-7xl'>.</span></p>
            <div className='space-y-4'>
                {projects.map((project) => (
                    <a key={project._id} href={project.liveUrl || '#'} target='_blank' rel='noopener noreferrer' className='group flex items-center gap-5 p-2 rounded-lg cursor-pointer ring-1 ring-transparent transition-all duration-200 ease-out hover:bg-accent/10 hover:ring-light-slate/40'>
                        <div className='relative w-[40%] h-35 shrink-0 overflow-hidden rounded-lg'>
                            <Image
                                src={urlFor(project.image).width(1200).height(720).url()}
                                alt="Project Image"
                                fill
                                className='object-cover'
                                sizes='(max-width: 768px) 100vw, 300px'
                            />
                        </div>
                        <div className='min-w-0 flex flex-col justify-between'>
                            <div className=''>
                                <p className='text-white text-lg' >{project.title} <span
                                    aria-hidden='true'
                                    aria-label='project arrow to show its clickable'
                                    className='inline-flex text-accent transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1'
                                >
                                    ↗
                                </span></p>
                                <p className='wrap-break-word'>{project.description}</p>
                            </div>

                            <div className='mt-3 flex flex-wrap gap-2 items-end'>
                                {project.technologies.map((tech) => {
                                    return (
                                        <div key={tech} className='bg-teal-400/10 rounded-xl w-fit '>
                                            <p className='px-5 py-1 text-accent whitespace-nowrap'>{tech}</p>
                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    </a>

                ))}
            </div>

        </section >
    )
}

import React from 'react'
import { client } from '@/lib/sanity'
import { Project } from '@/lib/types'
import Image from 'next/image'
import { urlFor } from '@/lib/image'
export default async function Projects() {
    const projects = await client.fetch<Project[]>(`*[_type == "project"] | order(orderRank asc)`);
    return (
        <section id='projects' aria-labelledby='projects-heading'>
            <h2 id='projects-heading' className='text-center text-4xl mb-4 text-white'>Projects <span className='text-accent text-7xl'>.</span></h2>
            <div className='space-y-4'>
                {projects.map((project: Project) => {
                    const card = (
                        <article className='group flex items-center gap-5 p-2 rounded-lg ring-1 ring-transparent transition-all duration-200 ease-out cursor-pointer hover:bg-accent/10 hover:ring-light-slate/40'>
                            <div className='relative w-[40%] h-35 shrink-0 overflow-hidden rounded-lg'>
                                <Image
                                    src={urlFor(project.image).width(1200).height(720).url()}
                                    alt={`${project.title} project preview`}
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 768px) 100vw, 300px'
                                />
                            </div>
                            <div className='min-w-0 flex flex-col justify-between'>
                                <div>
                                    <h3 className='text-white text-lg'>
                                        {project.title}
                                        {project.liveUrl ? (
                                            <span
                                                aria-hidden='true'
                                                className='ml-1 inline-flex text-accent transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1'
                                            >
                                                ↗
                                            </span>
                                        ) : null}
                                    </h3>
                                    <p className='wrap-break-word'>{project.description}</p>
                                </div>

                                <ul className='mt-3 flex flex-wrap gap-2 items-end'>
                                    {project.technologies.map((tech) => {
                                        return (
                                            <li key={tech} className='bg-teal-400/10 rounded-xl w-fit '>
                                                <span className='px-5 py-1 text-accent whitespace-nowrap'>{tech}</span>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </article>
                    );

                    return project.liveUrl ? (
                        <a
                            key={project._id}
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`Open ${project.title} project`}
                            className='block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                        >
                            {card}
                        </a>
                    ) : (
                        <div key={project._id}>{card}</div>
                    );
                })}
            </div>

        </section >
    )
}

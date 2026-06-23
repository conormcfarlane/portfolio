import React from 'react'

export default function About() {
    const programmingTags = ['ReactJS', 'Next.js', 'Sanity CMS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind', 'Github', 'VSCode']
    return (
        <section id='about' aria-labelledby='about-heading' className=''>
            <h2 id='about-heading' className='text-center text-4xl mb-4 text-white'>About <span className='text-accent text-7xl'>.</span></h2>
            <div className='flex flex-col justify-between gap-10 xl:flex-col'>
                <p className='text-lg w-full'>I&apos;m a Developer focused on building responsive, accessible web applications using React, Next.js, TypeScript, and Tailwind CSS.
                    <br />
                    Through personal projects, I&apos;ve gained experience building modern web applications from the ground up, working with APIs, dynamic data, client-side routing, and responsive layouts. I enjoy turning designs into intuitive user experiences and writing clean, maintainable code.
<br />
                    Many of my projects have been built from professional Figma designs and Frontend Mentor challenges, helping me develop practical experience with real-world development workflows, component-based architecture, and modern frontend best practices.
<br />
                    Before transitioning into software development, I worked in construction and quality assurance, where I developed strong attention to detail, problem-solving skills, and experience working in fast-paced team environments. I now apply those same skills to building reliable software as I continue to grow toward full-stack development.
<br />
                    Originally from Ireland and now based in Australia, you&apos;ll usually find me at the gym, exploring Melbourne, or continuing to learn and build new projects.
                </p>
                <div>
                    <h3 className='whitespace-nowrap text-center text-xl mb-4'>&lt;&gt;  Tech & Languages &lt;/&gt;</h3>
                    <ul className='grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-3'>
                        {programmingTags.map((tag) => (
                            <li key={tag} className='bg-teal-400/10 flex justify-center rounded-xl'>
                                <span className='py-1 px-5 whitespace-nowrap text-accent md:px-13'>{tag}</span>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>

        </section>
    )
}

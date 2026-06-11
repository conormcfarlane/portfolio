import React from 'react'

export default function About() {
    const programmingTags = ['ReactJS', 'Next.js', 'Sanity CMS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind', 'Github', 'VSCode']
    return (
        <section id='about' aria-labelledby='about-heading' className=''>
            <h2 id='about-heading' className='text-center text-4xl mb-4 text-white'>About <span className='text-accent text-7xl'>.</span></h2>
            <div className='flex flex-col justify-between gap-10 xl:flex-col'>
                <p className='text-lg w-full'>I&apos;m a Developer focused on building responsive, accessible web applications using React, Next.js, Tailwind CSS, and TypeScript.<br /><br />

                    I&apos;ve been using Frontend Mentor challenges to simulate real-world workflows — translating Figma designs into clean, responsive interfaces and working with APIs, JSON data, and client-side routing.
                    <br /><br />
                    I&apos;m transitioning from a background in construction and quality assurance into software development, bringing strong attention to detail, problem-solving skills, and experience working in structured, team-based, fast-paced environments. I&apos;m now applying that same discipline to writing clean, maintainable code and continuing to grow toward full-stack development.
                    <br /><br />
                    Outside of development, I&apos;m originally from Ireland and now based in Australia. In my free time, you&apos;ll usually find me at the gym or exploring Melbourne.
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

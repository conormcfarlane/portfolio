import React from 'react'

export default function About() {
    const programmingTags = ['React', 'Next.js', 'Sanity CMS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind', 'Github']
    return (
        <div className=''>
            <p className='text-center text-5xl mb-4 text-white'>About <span className='text-accent text-7xl'>.</span></p>
            <div className='flex justify-between gap-10 flex-col sm:flex-row'>
                <p className='text-lg sm:w-3/5'>I&apos;m a front-end developer focused on building responsive web applications using React and TypeScript.<br />
                    I&apos;ve completed several projects using APIs, JSON data and client-side routing. I primarly use  Figma to transform designs to life using React,Tailwind and TypeScript.<br />
                    For this portfoilio site i have used Next.js and Sanity as a headless CMS to store and manage my project data.
                </p>
                <div>
                    <p className='whitespace-nowrap text-center text-xl mb-4'>&lt;&gt;  Tech & Languages &lt;/&gt;  </p>
                    <div className='grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-3'>
                        {programmingTags.map((tag) => (
                            <div key={tag} className='bg-teal-400/10 flex justify-center rounded-xl'>
                                <p className='py-1 px-5 whitespace-nowrap text-accent'>{tag}</p>
                            </div>

                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

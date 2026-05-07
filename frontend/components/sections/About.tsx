import React from 'react'

export default function About() {
    const programmingTags = ['React', 'Next.js', 'Sanity CMS', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind', 'Github']
    return (
        <div className=''>
            <p className='text-center text-5xl mb-4'>About .</p>
            <div className='flex gap-4 justify-between'>
                <p className='w-3/4 text-lg'>I&apos;m a front-end developer focused on building responsive web applications using React and TypeScript.<br />
                    I&apos;ve completed several projects using APIs, JSON data and client-side routing. I primarly use  Figma to turn designs to life using React,Tailwind and TypeScript.<br />
                    For this portfoilio site i have used Next.js and Sanity as a headless CMS to store and manage my project data.
                </p>
                <div>
                    <p className='text-center text-xl'>&lt;&gt;  Tech & Languages &lt;/&gt; </p>
                    <div className='grid grid-cols-2 gap-3 bg-red-800'>
                        {programmingTags.map((tag) => (
                            <div key={tag} className='bg-gray-900 flex justify-center rounded-xl'>
                                <p className='py-1 px-4 whitespace-nowrap'>{tag}</p>
                            </div>

                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

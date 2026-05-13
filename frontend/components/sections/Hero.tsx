import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <section id='hero' className='p-4 space-y-5 flex flex-col justify-center'>
            <div className='flex justify-between items-center space-y-5'>
                <div className='space-y-2'>
                    <div className='flex gap-6'>
                        <a
                            href='https://github.com/conormcfarlane'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub profile'
                            className='rounded-full hover:text-white hover:shadow-accent hover:shadow'
                        >
                            <FaGithub className='text-2xl' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/conor-mcfarlane-1a2728185/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn profile'
                            className='rounded-md hover:text-white hover:shadow-accent hover:shadow'
                        >
                            <FaLinkedin className='text-2xl' />
                        </a>
                    </div>

                    <h1 className='text-5xl font-bold'>Hi, <span className='text-white'>I&apos;m Conor</span> </h1>
                    <p className='text-4xl'>I&apos;m a Junior Web Developer</p>
                </div>
            </div>
            <p> For this portfoilio site i have used Next.js and Sanity as a headless CMS to store and manage my project data.</p>
            <div>
                <Button label='Projects ↓' href='#projects' className='max-w-fit' />
            </div>


        </section>
    )
}

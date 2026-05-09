import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <section id='hero' className='p-4 space-y-5 min-h-screen flex flex-col justify-center'>
            <div className='flex justify-between items-center space-y-5'>
                <div className='space-y-2'>
                    <div className='flex gap-6'>
                        <FaGithub className='text-2xl rounded-full hover:text-white hover:shadow-accent hover:shadow ' />
                        <FaLinkedin className='text-2xl rounded-md hover:text-white hover:shadow-accent hover:shadow' />
                    </div>

                    <h1 className='text-7xl font-bold'>Hi,<span className='text-white'>I&apos;m Conor</span> </h1>
                    <p className='text-4xl'>I&apos;m a <span className='text-5xl'>Junior Web Developer</span></p>
                </div>
            </div>
            <p>I am a Junior Web Developer and it seems like i am never going to get a job, nice one</p>
            <div>
                <Button label='GET IN TOUCH !' />
            </div>


        </section>
    )
}

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Button from '../ui/Button'

export default function Hero() {
    return (
        <div className='bg-amber-900 p-4'>
            <div className='flex justify-between items-center space-y-5'>
                <div className='space-y-2'>
                    <div className='flex gap-6'>
                        <FaGithub className='text-2xl' />
                        <FaLinkedin className='text-2xl' />
                    </div>
                    <h1 className='text-7xl font-bold'>Hi, I&apos;m Conor</h1>
                    <p className='text-4xl'>I&apos;m a <span className='text-5xl  text-blue-700'>Junior Web Developer</span></p>
                </div>
                <p>the profile fella</p>
            </div>
            <p className='bg-red-800'>I am a Junior Web Developer and it seems like i am never going to get a job, nice one</p>
            <div className='mt-5'>
                <Button label='GET IN TOUCH !' />
            </div>

        </div>
    )
}

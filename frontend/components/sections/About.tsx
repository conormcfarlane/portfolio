import React from 'react'

export default function About() {
    const programmingTags = ['React', 'NextJS', 'NodeJS', 'HTML', 'CSS', 'Javascript']
    return (
        <div className=''>
            <p className='text-center text-5xl'>About .</p>
            <div className='flex gap-4'>
                <p className='w-1/2 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit omnis error minus nobis aliquid, aperiam reprehenderit, voluptas porro illum libero placeat, odio iure nemo blanditiis sequi id rem eligendi? Quia.
                    Fuga repellat placeat expedita tempore pariatur tenetur ducimus cum aspernatur eum, quisquam sequi aperiam repudiandae aut, id inventore. Quisquam ea quo iste similique minima omnis nulla corporis accusantium eligendi est?
                </p>
                <div className='grid grid-cols-3 items-start auto-rows-min gap-4'>
                    {programmingTags.map((tag) => (
                        <p key={tag} className='py-1 px-5 bg-gray-700 rounded-2xl text-center'>{tag}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

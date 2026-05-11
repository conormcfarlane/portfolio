import React from 'react'


export default function Navbar() {
    const navBarLinks = [
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' }]
    return (
        <nav className='flex justify-end lg:justify-start lg:p-4'>
            <div className='flex gap-8 lg:flex-col lg:justify-center'>{navBarLinks.map((link) => (
                <ul key={link.title}>
                    <li className=''><a href={link.href} className='inline-block cursor-pointer transition-transform duration-200 hover:scale-125 hover:text-white lg:text-2xl'> {link.title}</a></li>
                </ul>
            ))}</div>
        </nav>
    )
}

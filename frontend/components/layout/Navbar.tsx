import React from 'react'


export default function Navbar() {
    const navBarLinks = [
        { title: 'About', href: '#about' },
        { title: 'Projects', href: '#projects' }]
    return (
        <nav className='flex justify-between '>
            <div>CMcF</div>
            <div className='flex gap-8'>{navBarLinks.map((link) => (
                <ul key={link.title}>
                    <li className='cursor-pointer hover:text-white'><a href={link.href}>{link.title}</a></li>
                </ul>
            ))}</div>
        </nav>
    )
}

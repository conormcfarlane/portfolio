import Link from 'next/link'
import React from 'react'


export default function Navbar() {
    const navBarLinks = [
        { title: 'Home', path: '/' }
        ,
        { title: 'Projects', path: '/projects' }]
    return (
        <div className='flex justify-between '>
            <div>CMF</div>
            <div>{navBarLinks.map((link) => (
                <Link key={link.path} href={link.path}> {link.title} </Link>
            ))}</div>
        </div>
    )
}

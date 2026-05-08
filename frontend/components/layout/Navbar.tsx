"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const pathName = usePathname()
    const navBarLinks = [
        { title: 'Home', path: '/' }
        ,
        { title: 'Projects', path: '/projects' }]
    return (
        <div className='flex justify-between '>
            <div>CMcF</div>
            <div className='flex gap-8'>{navBarLinks.map((link) => (
                <Link key={link.path} href={link.path} className={` ${pathName === link.path ? 'underline-offset-4 underline decoration-accent decoration-2 text-lightest-slate' : ''} , ${pathName !== link.path ? 'hover:text-white' : ''} `} > {link.title} </Link>
            ))}</div>
        </div>
    )
}

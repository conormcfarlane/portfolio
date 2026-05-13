import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string
    href?: string
    className?: string
}

export default function Button({ label, className = "", href, ...props }: ButtonProps) {
    const baseClasses = 'border border-accent px-3 py-2 rounded-lg  flex items-center justify-center cursor-pointer hover:bg-accent/15'

    if (href) {
        return (
            <a href={href} className={baseClasses + ' ' + className}>
                <span className='text-accent -translate-y-0.5'>{label}</span>
            </a>
        )
    }
    return (
        <button className={""} {...props}>
            <span className='text-accent -translate-y-0.5'>{label}</span>

        </button>
    )
}
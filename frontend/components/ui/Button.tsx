import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}

export default function Button({ label, className = "", ...props }: ButtonProps) {
    return (
        <button className={"border border-accent px-3 py-2 rounded-lg  flex items-center justify-center cursor-pointer hover:bg-accent/15"} {...props}>
            <span className='text-accent -translate-y-0.5'>{label}</span>

        </button>
    )
}
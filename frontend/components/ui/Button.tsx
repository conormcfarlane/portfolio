import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}

export default function Button({ label, className = "", ...props }: ButtonProps) {
    return (
        <button className={"bg-blue-700 px-3 py-2 rounded-2xl  flex items-center justify-center"} {...props}>
            <span className='-translate-y-0.5'>{label}</span>

        </button>
    )
}
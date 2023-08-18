import React from 'react'
type InputProps = {
    name: string;
    placeholder: string;
    type: string
}
export default function Input(props: InputProps) {
    return (
        <input className='h-12 bg-dark w-full rounded-full outline-primary placeholder:px-6' placeholder={`${props.placeholder} `} type={`${props.type}`} name={`${props.name}`} />
    )
}


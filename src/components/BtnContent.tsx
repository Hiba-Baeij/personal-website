import React from 'react'

type BtnProps = {
    name: string;
    icon: string;
    class?: string
}
export default function Home(props: BtnProps) {
    return (
        <button style={{ boxShadow: '-0.2em -0.2em 0 .05em #005BA4' }} className={`w-[185px] ${props.class} rounded-full flex justify-evenly items-center`}>
            <span className='p-3'>
                {props.name}
            </span>
            <div className='bg-primary w-10 h-10 rounded-full flex justify-center items-center'>
                <span className={`mdi ${props.icon} text-2xl`}></span>
            </div>
        </button>
    )
}

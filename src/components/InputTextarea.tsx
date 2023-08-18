import React from 'react'
type InputProps = {
    name: string;
    placeholder: string;

}
export default function InputTextarea(props: InputProps) {
    return (
        <textarea className='h-40 bg-dark w-full rounded-3xl outline-primary  placeholder:px-6 placeholder:py-6' placeholder='Your Message' name="" id="" />
    )
}


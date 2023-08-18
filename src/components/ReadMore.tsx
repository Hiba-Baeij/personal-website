import React, { useState } from 'react'
type PropsType = {
    text: string,
    wordCount: number,
}
export default function ReadMore({ text, wordCount }: PropsType) {
    // const textLength = useRef(() => text?.split(' ').length ?? 0)
    const isActive=useState()
    return (
        <p className='transition-all'></p>
        //       <p class="transition-all">
        //     {{ expand || textLength <= wordsCount ? text : text?.split(' ').slice(0, wordsCount).join(' ') + ' ... ' }} <button
        //         v-if="text && text.split(' ').length > wordsCount"
        //         class=" text-xl hover:bg-white underline border-primary transition hover:bg-opacity-10 p-1 rounded-lg "
        //         @click="expand = !expand">{{ expand?' Read Less': 'Read More' }} </button>
        // </p >
    )
}

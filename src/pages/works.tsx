import React from 'react'
import BtnContent from '@/src/components/BtnContent';
import { workList } from "@/src/data/index"
import Image from "next/image"
export default function works() {
    return (
        <section className='works mb-28 md:mb-0 relative'>
            <div className='relative mt-12 md:mb-24 mb-0' >
                <h2 className='md:text-center ml-6 text-left opacity-100 font-bold md:text-5xl text-4xl after:content-["WORKS"] after:font-bold md:after:text-8xl after:text-5xl after:leading-10 after:tracking-widest after:opacity-10 after:absolute md:after:-bottom-5 after:-bottom-2 md:after:left-[38%] after:left-4'>MY<span className='text-primary '> PORTFOLIO</span></h2>
            </div>
            <div className='flex justify-center items-center lg:px-20 px-5 relative'>
                <svg
                    className="bottom-left-light absolute blur-[400px] opacity-70 top-0 right-0 hidden md:block md:left-0 "
                    width="494" height="309" viewBox="0 0 494 309" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF"
                        fillOpacity="0.77" />
                </svg>
                {/* style={{ boxShadow: "#005BA4 0px 1px 15px", opacity: "20px" }} */}
                <div className='grid grid-cols-2' style={{ border: "3px solid #005BA4" }}>
                    {
                        workList.map((work, index) =>
                            index % 2 == 0 ?
                                <>
                                    <div className='lg:col-span-1 col-span-2 p-8 relative h-[500px]' >
                                        <h4 className='text-5xl font-bold'>{work.title}</h4>
                                        <div className='mt-3'>
                                            <h2 className='text-7xl font-bold opacity-25 absolute bottom-6 right-6'>{
                                                (index + 1).toLocaleString("en-US", {
                                                    minimumIntegerDigits: 2,
                                                    useGrouping: false,
                                                })
                                            }</h2>

                                            <p className='text-2xl leading-snug'>{work.text} <span className='font-bold'>Elkood</span>  Frontend Team.</p>
                                            <div className='flex justify-start items-center gap-5 mt-4'>
                                                <span>build with </span>
                                                {
                                                    work.icons.map((icon) =>
                                                        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                                                            <img src={icon} width={50} alt="" className='hover:scale-125 transition-all cursor-pointer' />
                                                        </a>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        <BtnContent class='mt-10' name='Live Preview' icon='mdi-arrow-down-thick'></BtnContent>
                                    </div>
                                    <div className='lg:col-span-1 col-span-2 hover:cursor-pointe'>
                                        <img src={work.image} className='w-full h-full object-contain hover:scale-105 transition-all' alt="" />

                                        {/* <Image width={500} height={500} priority src={work.image} className='w-auto h-auto object-contain hover:scale-105 transition-all' alt="" /> */}
                                    </div>
                                </>
                                :
                                <>

                                    <div className='lg:col-span-1 col-span-2 hover:cursor-pointer'>
                                        <img src={work.image} className='w-full h-full object-cover hover:scale-105 transition-all' alt="" />
                                    </div>
                                    <div className='lg:col-span-1 col-span-2 p-8 relative'>
                                        <h4 className='text-2xl font-bold'>{work.title}</h4>
                                        <div className='mt-3'>
                                            <h2 className='text-7xl font-bold opacity-25 absolute bottom-6 right-6'>{
                                                (index + 1).toLocaleString("en-US", {
                                                    minimumIntegerDigits: 2,
                                                    useGrouping: false,
                                                })
                                            }</h2>

                                            <p>{work.text} <span className='font-bold'>Elkood</span>  Frontend Team.</p>
                                            <div className='flex justify-start items-center gap-5 mt-4'>
                                                <span>build with </span>
                                                {
                                                    work.icons.map((icon) =>
                                                        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                                                            <img src={icon} width={50} alt="" className='hover:scale-125 transition-all cursor-pointer' />
                                                        </a>
                                                    )
                                                }

                                            </div>
                                        </div>
                                        <BtnContent class='mt-10' name='Live Preview' icon='mdi-arrow-down-thick'></BtnContent>
                                    </div>
                                </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

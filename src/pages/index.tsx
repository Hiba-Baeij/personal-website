import React from "react"
import Image from "next/image"
import { motion, useTime, useTransform } from "framer-motion"
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

export default function home() {

    return (
        <section className="home relative h-screen">
            <img alt="" src="/triangle-side.svg" className="h-full absolute lg:block hidden" />
            <div className="grid grid-cols-2 h-full">
                <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse", }}
                    className="bottom-left-light absolute blur-[500px] bottom-0 right-0 hidden md:block md:left-0 "
                    width="494" height="309" viewBox="0 0 494 309" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF"
                        fillOpacity="0.77" />
                </motion.svg>
                <div className="lg:col-span-1 col-span-2">
                </div>
                <motion.div initial={{ opacity: 0, x: -400 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className="lg:col-span-1 col-span-2 text-white flex justify-start items-center z-40">

                    <div className="px-6">
                        <div className="flex justify-center lg:justify-start items-center lg:items-start flex-col">
                            <div className="flex justify-start items-center gap-5">
                                <div className="text-5xl lg:block hidden  bg-primary w-10 h-1 rounded-md mt-1"></div>
                                <h2 className="text-4xl lg:text-5xl leading-tight font-bold text-primary">I'M HIBA BAIJ. </h2>
                            </div>
                            <h2 className="text-2xl lg:text-5xl leading-tight font-bold mt-3 lg:ml-16 ml-0">
                                WEB DEVELOPER
                            </h2>
                        </div>

                        <p className="w-max-[32rem] lg:w-[32rem] mt-8 leading-loose tracking-wide text-base lg:text-left text-center">Im a front‑end developer focused on crafting clean &  user‑friendly experiences, I am passionate about building excellent software  that improves the lives of those around me.</p>
                        <div className="flex justify-center lg:justify-start items-center">

                            <button className=" mt-8 shadow shadow-primary p-3 rounded-full">MORE ABOUT ME</button>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}


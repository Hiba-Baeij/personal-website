import React from 'react'
import BtnContent from "@/src/components/BtnContent"
import { motion } from "framer-motion";
import Image from "next/image"
export default function about() {
    return (
        <section className='about mb-28 md:mb-0 relative lg:px-36 px-0'>
            <div className='relative mt-12 md:mb-24 mb-0' >
                <h2 className='md:text-center ml-6 text-left opacity-100 font-bold md:text-5xl text-4xl after:content-["RESUME"] after:font-bold md:after:text-8xl after:text-5xl after:leading-10 after:tracking-widest after:opacity-10 after:absolute md:after:-bottom-5 after:-bottom-2 md:after:left-[30%] after:left-4'>ABOUT<span className='text-primary '> ME</span></h2>
            </div>
            {/* personal info */}
            <div className='lg:mx-16 mx-5'>
                <div className='grid grid-cols-2 lg:mt-28 mt-14'>
                    <div className='lg:col-span-1 col-span-2 md:order-1 order-2 mt-8 md:mt-0'>
                        <svg
                            className="bottom-left-light absolute blur-[400px] opacity-70 top-0 right-0 hidden md:block md:left-0 "
                            width="494" height="309" viewBox="0 0 494 309" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF"
                                fillOpacity="0.77" />
                        </svg>
                        <h2 className='text-3xl font-semibold'>PERSONAL INFOS</h2>
                        <div className='col-span-6 flex  w-full mt-10 gap-10'>
                            <ul>
                                <li>First Name: <span className='font-bold'>Hiba</span></li>
                                <li className='mt-4'>Age : <span className='font-bold'>21 </span>Years</li>
                                <li className='mt-4'><a href="/">Phone:<span className='font-bold'> +963 967283981</span></a></li>
                                <li className='mt-4'>Languages:<span className='font-bold'> Arabic (native),English</span> </li>
                            </ul>
                            <ul>
                                <li>Last Name:<span className='font-bold'> Baij</span></li>
                                <li className='mt-4'>Nationaluty: <span className='font-bold'>Syria</span></li>
                                <li className='mt-4'><a href="/">Email: <span className='font-bold'> hibabeiaj@gmail.com</span></a></li>
                                <li className='mt-4'>Birthday:<span className='font-bold'> 10 july 2001</span></li>
                            </ul>
                        </div>
                        <BtnContent class='mt-10' name='Download CV' icon='mdi-download'></BtnContent>


                    </div>
                    <div className='lg:col-span-1 col-span-2 flex lg:justify-end justify-start items-center order-1 md:order-2'>
                        <Image src={'/profile.jpg'} width={400} height={400} alt='profile-image' className='rounded-xl shadow shadow-primary'></Image>
                    </div>

                </div>

                {/* summary */}
                {/* <div className=' flex justify-center items-center flex-col w-full mt-28 '>
                    <h2 className='text-3xl font-semibold'>SUMMARY</h2>
                    <div className='border-4 border-primary p-8 text-lg leading-loose mt-10 rounded-2xl'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aspernatur architecto, excepturi facere necessitatibus expedita enim modi quidem nobis assumenda incidunt natus deserunt beatae! Consectetur ea sequi delectus laudantium dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, accusantium cumque reiciendis eveniet animi vero mollitia sunt ut soluta perspiciatis voluptatem eos deserunt suscipit necessitatibus natus eligendi consequuntur. Blanditiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi id, laboriosam inventore velit optio labore ratione eaque eius at officiis placeat fugiat provident consequatur doloremque impedit voluptatem ipsum itaque error! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum doloribus possimus rerum aliquid natus quis voluptatem quas voluptatum aspernatur minus eveniet neque, nam, a sequi tempore hic sit ducimus cumque.</p>
                    </div>
                </div> */}

                {/* skills */}

                <div className='mt-28'>
                    <h2 className='text-3xl font-semibold text-center'>MY SKILLS</h2>
                    <div className='grid gap-10 md:gap-0 grid-cols-12 my-20'>

                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/typescript.webp" className='w-12 md:w-24' alt="" />
                        </div>
                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/javascript.webp" className="w-12 md:w-24 rounded-xl" alt="" />

                        </div>
                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/vue.webp" className='w-12 md:w-24' alt="" />
                        </div>
                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/nuxt.svg" className="w-12 md:w-40" alt="" />
                        </div>

                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/react.webp" className="w-12 md:w-24" alt="" />
                        </div>
                        <div className='col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer'>
                            <img src="/icons/sass.webp" className="w-12 md:w-24" alt="" />
                        </div>
                    </div>

                    <p className="text-center my-10  dark:text-gray-200"> <span className="text-primary font-bold mx-1"> Expert
                    </span>
                        using Tools and Libraries</p>

                    <div className="grid gap-10 md:gap-0 grid-cols-12 my-20 relative">
                        <svg
                            className="bottom-left-light absolute blur-[400px] opacity-70 top-0 left-0 hidden md:block md:right-0 -z-30"
                            width="494" height="309" viewBox="0 0 494 309" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle r="247" transform="matrix(1 0 0 -1 247 247)" fill="#436CFF"
                                fillOpacity="0.77" />
                        </svg>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/vite.webp" className="w-12 md:w-24" alt="" />
                        </div>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/pinia.svg" className="w-12 md:w-24  " alt="" />
                        </div>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/redux.webp" className="w-12 md:w-24" alt="" />
                        </div>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/tailwind.webp" className="w-12 md:w-24" alt="" />
                        </div>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/bootstrap.webp" className="w-12 md:w-24" alt="" />
                        </div>
                        <div className="col-span-4 md:col-span-2 flex justify-center items-center hover:scale-125 transition-all cursor-pointer">
                            <img src="/icons/gsap.svg" className="w-12 md:w-24" alt="" />
                        </div>
                    </div>
                </div>
                {/* EXPERIENCE & EDUCATION */}
                <div className='mt-16 my-40'>
                    <h2 className='text-3xl font-semibold text-center'>EXPERIENCE & EDUCATION</h2>
                    <div className='grid grid-cols-2 gap-20 mt-20 md:mx-0 mx-4'>
                        <ol className="md:col-span-1 col-span-2 flex justify-start items-start flex-col relative border-l border-gray-200">
                            <li className="ml-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-14"><span className='text-gray-300'>2019</span></h3>
                                <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>BACHELOR DEGREE </h3>
                                <p>I started my studies from the primary stage all the way to middle school and high school, in which I took my bachelor’s degree with a rate of 90%, which qualified me to enter the university.</p>
                            </li>
                            <li className="ml-10 mt-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-24"><span className='text-gray-300'>2020-2021</span></h3>
                                <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>ENGINEERING DEGREE</h3>
                                <p>I entered the University of Aleppo in Syria, where I studied at the Faculty of Informatics Engineering, through which I started my career in programming, and I preferred the field of software engineering more.</p>
                            </li>
                            <li className="ml-10 mt-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-36"><span className='text-gray-300'>2020-2021-2022</span></h3>
                                <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>WEB DEVELPOER</h3>
                                <p>I started learning the field of web development through which I learned css html javascript and delved more into the front end field and started learning frameworks such as vue and react.</p>
                            </li>
                        </ol>
                        <ol className="md:col-span-1 col-span-2 flex justify-center items-center flex-col relative border-l border-gray-200">
                            <li className="mb-10 ml-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-14"><span className='text-gray-300'>2022</span></h3>
                                <div className='flex justify-start items-center gap-4'>
                                    <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>FRONTEND VUE JS DEVELOPER</h3> <span className='text-primary mb-2 font-bold'>at JetOrder</span>
                                </div>
                                <p>I Worked as Freelancer at MindTorches Company on JetOrder project Which is an project that provides customers with the service of creating their own e-commerce, and it is a project that consists of 3 applications. two control panels, a main dashboard for project management and a dashboard for the store owner, and a mobile application .</p>

                            </li>
                            <li className="mb-10 ml-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-24"><span className='text-gray-300'>2022-2023</span></h3>
                                <div className='flex justify-start items-center gap-4'>
                                    <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>FRONTEND VUE JS DEVELOPER</h3> <span className='text-primary mb-2 font-bold'>at Elkood</span>
                                </div>
                                <p>I started in EKOOD as Vue.js jonior developer , I Worked on many projects with the team , we used technologies and libraries like Vuejs, bootstrap , vuetify , scss , Three.Js and GreenSock. I built a reusable template for the next projects that includes a lot of reusable components and functionality. I Worked on different types of projects , dashboards to manage the content of the projects , Landing Pages like Altin Sary and Root Agency website.</p>
                            </li>

                            <li className="ml-10">
                                <span className="absolute flex items-center justify-center w-10 h-10 bg-primary rounded-full -left-5">
                                    <span className='mdi mdi-download text-xl text-white'></span>
                                </span>
                                <h3 className="bg-dark rounded-full flex justify-center items-center w-14"><span className='text-gray-300'>2019</span></h3>
                                <div className='flex justify-start items-center gap-4'>
                                    <h3 className='text-xl font-bold mt-2 mb-4 text-gray-200'>FRONTEND NUXT JS</h3> <span className='text-primary mb-2 font-bold'>at Elkood</span>
                                </div>
                                <p>I Worked on many projects with the team ,like Qr Germany Which consists of a special site for generating codes, as well as definition sections and a dashboard and Jenacome It is a shipping company for the transportation of goods in the Netherlands Which consists of landin page and dashboard </p>
                            </li>
                        </ol>

                    </div>
                </div>


            </div>


        </section >
    )
}

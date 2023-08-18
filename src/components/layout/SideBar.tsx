
import Link from 'next/link';
import React, { Component } from 'react'
import { useRouter } from "next/router";
import styled from 'styled-components';

const links = [
    {
        id: "1",
        path: "/",
        name: "home",
        icon: "mdi mdi-home"

    },
    {
        id: "2",
        path: "/about",
        name: "about",
        icon: "mdi mdi-account"

    },
    {
        id: "3",
        path: "/works",
        name: "works",
        icon: "mdi mdi-bag-checked"

    },
    {
        id: "4",
        path: "/contact",
        name: "contact",
        icon: "mdi mdi-message"
    }

];
const Li = styled.li`
  
`;
export default function SideBar() {
    const router = useRouter();

    return (
        <div >

            <div className='z-40 fixed top-4 right-4 bg-dark shadow-sm shadow-primary w-12 h-12 rounded-full flex justify-center items-center'>
                <Link href='/'><span className="mdi mdi-moon-waxing-crescent text-2xl"></span></Link>
            </div>
            <div className='z-50 fixed right-0 top-1/3 w-20 hidden md:flex justify-center items-center'>
                <ul className='text-white flex justify-center items-center flex-col gap-6 relative'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id}>
                                    {/* <div className='bg-primary w-32 h-12 absolute rounded-full right-0 flex justify-center items-center opacity-0'>{ele.name}</div> */}
                                    <Link href={ele.path}
                                        style={{ boxShadow: router.pathname == `/${ele.name}` ? '0em 0em 0 0em #0F1212' : '-0.2em -0.2em 0 .05em #005BA4' }}
                                        className={router.pathname == ele.path ? 'bg-primary w-12 h-12 rounded-full flex justify-center items-center' : 'bg-dark w-12 h-12 rounded-full flex justify-center items-center'}>
                                        {/* <a href={`/${ele.name}`} id="link"> */}
                                        <span className={`${ele.icon} text-2xl`}></span>
                                        {/* </a> */}
                                    </Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            <div className='md:hidden z-50 fixed bottom-0 w-full'>
                <ul className='text-white flex justify-center items-center gap-10 bg-dark p-4 rounded'>
                    {
                        links.map((ele) => {
                            return (
                                <li key={ele.id}>
                                    <Link href={`/${ele.name}`}
                                        style={{ boxShadow: router.pathname == `/${ele.name}` ? '0em 0em 0 0em #0F1212' : '-0.2em -0.2em 0 .05em #005BA4' }}
                                        className={router.pathname == `/${ele.name}` ? 'bg-primary w-12 h-12 rounded-full flex justify-center items-center' : 'bg-dark w-12 h-12 rounded-full flex justify-center items-center'}>
                                        {/* <a href={`/${ele.name}`} id="link"> */}
                                        <span className={`${ele.icon} text-2xl`}></span>
                                        {/* </a> */}
                                    </Link>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>
            {/* < Component {...data.map(block => block.component)}/> */}
        </div>

    )
}



import React from 'react'
import BtnContent from "@/src/components/BtnContent"
import Input from '../components/Input';
import InputTextarea from '../components/InputTextarea';
export default function contact() {
    return (
        <section className='contact mb-28 md:mb-0 relative lg:px-36 px-0'>
            <div className='relative mt-12 md:mb-24 mb-0' >
                <h2 className='md:text-center ml-6 text-left opacity-100 font-bold md:text-5xl text-4xl after:content-["CONTACT"] after:font-bold md:after:text-8xl after:text-5xl after:leading-10 after:tracking-widest after:opacity-10 after:absolute md:after:-bottom-5 after:-bottom-2 md:after:left-[30%] after:left-4'>GET IN<span className='text-primary '> TOUCH</span></h2>
            </div>
            {/* <div className='flex md:justify-center justify-start items-center'> */}
            {/* style={{ height: 'calc(100vh - 50px)' }} */}
            <div className='grid grid-cols-3 lg:mx-10 mx-3'>
                <div className='md:col-span-1 col-span-3 felx justify-center items-center md:mt-0 mt-14'>

                    <p>I am always open to contact me,
                        creative ideas or opportunities to
                        be part of your visions.</p>


                    <div className='flex justify-start items-start flex-col md:mt-10 mt-2'>

                        <div className='flex justify-start items-start flex-col mt-6 gap-10 w-full'>
                            <div className='flex justify-center items-center gap-6'>
                                <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'><span className='mdi mdi-email text-2xl'></span></div>
                                <div className='flex justify-start flex-col items-start '>
                                    <span>MAIL ME</span>
                                    <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>hibabeiaj@gmail.com</a>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-6 mr-8'>
                                <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center'><span className='mdi mdi-phone text-2xl'></span></div>
                                <div className='flex justify-start flex-col items-start '>
                                    <span>CALL ME</span>
                                    <a href="https://mail.google.com/mail/u/0/#sent" target="_blank" rel="noopener noreferrer" className='underline'>+930 967283981</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start items-start gap-6 mt-10 w-full'>
                            <a href='https://www.facebook.com/hiba.be.756/' target='_blank' className='overflow-hidden bg-dark w-12 h-12 rounded-full flex justify-center items-center'> <span className='link'></span><span className=' mdi mdi-facebook text-2xl'></span></a>
                            <a href='https://t.me/Haboosh78' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><span className='mdi mdi-send text-2xl'></span></a>
                            <a href='https://www.din.com/in/hiba-baeij-59573222b/' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><span className='mdi mdi-linkedin text-2xl'></span></a>
                            <a href='https://www.instagram.com/hiba.be.756/' target='_blank' className='bg-dark w-12 h-12 rounded-full flex justify-center items-center'><span className='mdi mdi-instagram text-2xl'></span></a>

                        </div>
                    </div>

                </div>
                <div className='md:col-span-2 col-span-3 felx justify-center items-center mt-10 md:mt-0'>
                    <div className='grid grid-cols-2 md:mx-16 md:gap-10 gap-5'>
                        <div className='md:col-span-1 col-span-2'>
                            <Input placeholder='Your Name' type='text' name='name'></Input>
                        </div>
                        <div className='md:col-span-1 col-span-2'>
                            <Input placeholder='Your Email' type='email' name='email'></Input>
                        </div>
                        <div className='col-span-2'>
                            <Input placeholder='Your Subject' type='text' name='subject'></Input>
                        </div>
                        <div className='col-span-2'>
                            <InputTextarea placeholder='Your Message' name='message'></InputTextarea>
                        </div>
                        <div className='col-span-2 flex md:justify-start justify-center items-center'>
                            <BtnContent name='SEND MESSAGE' icon='mdi-send'></BtnContent>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}

        </section>
    )
}

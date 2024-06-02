import React from 'react'
import TypeWriteEffect from './TypeWriteEffect'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from "lottie-react"
import animation from "../public/images/anime/Animation.json";

const Hero = () => {
    return (
        <div className='w-[100vw] pt-[vh] md:pt-[12vh] h-[85vh] md:h-[100vh] 
    custom-bg'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center '>
                    <div data-aos="fade-right" data-aos-delay="500">
                        <h1 className='text-[#c4cfde] mb-[1.3rem] mt-4  '>Welcome To My World</h1>
                        <div>
                            <h1 className='text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 
                        font-semibold text-white'> I am  <span className='text-yellow-600'>Ahmed Samir </span></h1>
                            <TypeWriteEffect />
                        </div>
                        <p className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde] leading-5'>My Goal is helping you Creating your Creative Responsive WebSite.ensuring the appearance and layout of the site or application is easy to navigate and intuitive for the user </p>
                        <div className='mt-[2rem] flex items-center space-x-6 '>
                           
                            <button className='before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white
                            font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
                            before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
                            before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black 
                            hover:before:-rotate-180'>
                                 <Link className='relative z-10' href="/port.pdf" target='_blank'>Download CV</Link>
                            </button>
                            
                        </div>

                    </div>
                    <Lottie data-aos="fade-left" data-aos-delay="400"  animationData={animation} />

                </div>
            </div>
        </div>
    )
}

export default Hero
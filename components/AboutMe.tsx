import React from 'react'
import { FaCheck } from "react-icons/fa6";


const AboutMe = () => {
  return (
        <div className='mt-[3rem] bg-black pb-[3rem]' id='about'>
            <div className='w-[80%] pt-[7rem] md:pt-[10rem] mx-auto grid items-center 
            grid-cols-1 md:grid-cols-2  gap-[2rem]   '>
                <div data-aos="fade-left" data-aos-delay="400">
                    <p className='heading__mini'>About Me</p>
                    <h1 className='heading__primary'>Professional <span className='text-yellow-400'>WebSite For Your Bussiness </span> </h1>
                    <p className='text-[15px] mt-[1.3rem] text-white opacity-75'> Front End Development includes creating a user interface website or application. My Job involves designing and implementing the visual elements, layout and features that users see and interact with. I  primarily use HTML, CSS, and JavaScript to structure the content</p>
                    <div className='mt-[2rem] space-y-3 '>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='2-[2rem] h-2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>FrontEnd WebDeveloper</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='2-[2rem] h-2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>React WebDeveloper</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='2-[2rem] h-2rem] text-yellow-400' />
                            <p className='text-[18px] text-white'>Next JS WebDeveloper</p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-auto'>
                <div  data-aos="fade-right" data-aos-delay="500" className='grid grid-cols-1 md:grid-cols-2 items-center gap-[2rem] '>
                    <div className=' p-6 text-center bg-yellow-500'>
                        <p className='text-[50px] text-black font-bold'>1</p>
                        <p className='text-[20px] text-black font-600'>Year Experience</p>
                    </div>
                    
                    <div className=' p-6 text-center bg-yellow-500'>
                        <p className='text-[50px] text-black font-bold'>+40</p>
                        <p className='text-[20px] text-black font-600'> Finished Projects</p>
                    </div>
                    <div className=' p-6 text-center bg-yellow-500'>
                        <p className='text-[50px] text-black font-bold'>1</p>
                        <p className='text-[12px] text-black font-600'>Year Experience Graphic Designer</p>
                    </div>
                </div>
            </div>
            </div>
         

    </div>
  )
}

export default AboutMe
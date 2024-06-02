import React from 'react'
import { FaPhone } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from 'next/link';
import { SiGmail } from "react-icons/si";


import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs';


const Contact = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900' id='contact'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center  gap-3 w-[80%] mx-auto'>
                <p className='heading__mini'>Get in Touch</p>
                <h1 className='heading__primary'>
                    Lets make your <span className='text-yellow-300'>Brand</span>  Brilliant
                </h1>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white'> +20 01099060626</h1>
                    <FaPhone className='bg-yellow-300 p-1 text-[30px] rounded-3xl' />
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white' >ahmedShamss89</h1>
                    <Link href="https://www.instagram.com/ahmedshamss98/">
                    <CiInstagram className='bg-yellow-300 p-1 text-[30px] rounded-3xl cursor-pointer' />
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white' >Ahmedshams123</h1>
                    <Link href="https://twitter.com/Ahmedshams123">
                    <FaXTwitter className='bg-yellow-300 p-1 text-[30px] rounded-3xl cursor-pointer' />
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white' >shamsahmed100@gmail.com
</h1>
                    
                    <SiGmail className='bg-yellow-300 p-1 text-[30px] rounded-3xl cursor-pointer' />
                    
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white' >AhmedSamirshams98</h1>
                    <Link href="https://github.com/AhmedSamirshams98">
                    <BsGithub className='bg-yellow-300 p-1 text-[30px] rounded-3xl cursor-pointer' />
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='underline text-white' >Ahmed Samir Shams</h1>
                    <Link href="https://www.facebook.com/ahmed.shams.9465?mibextid=ZbWKwL">
                    <FaFacebook className='bg-yellow-300 p-1 text-[30px] rounded-3xl cursor-pointer' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact
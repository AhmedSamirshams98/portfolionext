import React, { useEffect, useState } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import Link from 'next/link';

interface Props {
    openNav: () => void
}


const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false);


    return (
        <div className={` fixed w-[100%]  duration-500  z-[1000]`}>
            <div className='flex items-center h-[12vh] justify-between w-full px-10 mx-auto bg-gray-800 '>
                <div className='font-logo text-white text-[18px]'>
                    <span className='text-[30px] md:text-[40px] text-yellow-400'>AS</span>FrontEndDeveloper
                </div>
                <ul className='hidden md:flex items-center space-x-10'>
                    <li>
                        <Link className='nav_link duration-300' href='/#'>Home</Link>
                    </li>
                    <li>
                        <Link className='nav_link duration-300' href='/#about' >About</Link>
                    </li>
                    <li>
                        <Link className='nav_link duration-300' href='/#services' >Services</Link>
                    </li>
                    <li>
                        <Link className='nav_link duration-300' href='/#skills' >Skills</Link>
                    </li>
                    <li>
                        <Link className='nav_link duration-300' href='/#projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className='nav_link duration-300' href='/#contact' >contact</Link>
                    </li>
                </ul>
                <HiBars3CenterLeft onClick={openNav} className='w-[2.3rem] h-[2.3rem] md:hidden lg:hidden text-white rotate-180' />
            </div>
        </div>
    )
}

export default Nav
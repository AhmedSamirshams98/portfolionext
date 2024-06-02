import React from 'react'
import { FaXmark } from "react-icons/fa6";

interface Props {
    showNav:boolean;
    closeNav:()=>void
}


const Navmobile = ({closeNav,showNav}:Props) => {

    const navOpenStyle= showNav?"translate-x-0":"translate-x-[-100%] "
    return (
        <div>
            <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[1000] left-0
    right-0 blur-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}>

            </div>
            <ul className={`text-white ${navOpenStyle} fixed flex items-center text-center justify-center   flex-col h-[100%] transform 
        transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14  z-[10006] `}>
            
            <li >
                <a onClick={closeNav} className='nav_link text-[30px]  md:text-[25px]' href='/#'>Home</a>
            </li>
            <li>
                <a onClick={closeNav} className='nav_link text-[30px]  md:text-[25px]' href='/#about'>About</a>
            </li>
            <li>
                <a onClick={closeNav} className='nav_link text-[30px]  md:text-[25px]' href='/#services'>Services</a>
            </li>
            <li>
                <a onClick={closeNav} className='nav_link text-[30px]  md:text-[25px]' href='/#projects'>Projects</a>
            </li>
            <li>
                <a onClick={closeNav} className='nav_link text-[30px]  md:text-[25px]' href='/#contact'>Contact</a>
            </li>
            <FaXmark onClick={closeNav} className='absolute -top-10 right-4 text-[25px] hover:text-black 
            duration-300 ease-in-out hover:rotate-180' />
        </ul>

        </div>

    )
}

export default Navmobile
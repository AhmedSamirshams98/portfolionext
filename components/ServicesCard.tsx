import React from 'react'
interface Props{
    title:string;
    num:string;
    paragraph:string;
}
import { HiOutlineCommandLine } from "react-icons/hi2";


import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { BiLogoJavascript } from "react-icons/bi";


import { BiLogoTailwindCss } from "react-icons/bi";






const iconMapping={
    "01":FaReact,
    "02":SiNextdotjs,
    "03":BiLogoTailwindCss,
    "04":BiLogoJavascript,
    
}

const ServicesCard = ({num,title,paragraph}:Props) => {
    const IconComponent=(
        iconMapping as Record<string,React.ElementType>)[num]||HiOutlineCommandLine;
    
  return (
    <div className='bg-black custom__service z-[100] relative transform rounded-2xl 
    text-center p-6 shadow-md'>
        <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" />
        <h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>{title}</h1>
        <p className='text-white text-[10px] opacity-60 mt-[0.8rem] '>{paragraph}</p>
        <p className='text-white text-[1.6rem] font-bold absolute top-3 right-4 '>{num}</p>

    </div>
  )
}

export default ServicesCard
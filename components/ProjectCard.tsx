import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
interface Props {
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    link: string;

}

const ProjectCard = ({ image, tech1, tech2, tech3, title, link }: Props) => {
    return (
        <div  className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 md:grid-cols-2
    gap-10 items-center'>
            <div className='p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform 
        transition-all duration-200 bg-gray-800 shadow-md'>
                <div>
                    <Link href={`${link}`} >
                        <Image
                            src={`${image}`} alt={title} width={500} height={500}
                            className='object-contain rounded-xl mx-auto shadow-md' />
                    </Link>
                </div>


            </div>
            <div >
                <h1 className='text-[25px] text-white'>{title}</h1>
                <p className='text-white opacity-65 text-[15px] mt-[1rem]'>
                    This Project Introduction
                </p>
                <div className='mt-[1.3rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] '>
                    <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-center hover:bg-orange-300 
                transition-all duration-500 ease-in-out'>
                        {tech1}
                    </h1>
                    <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-center hover:bg-orange-300 
                transition-all duration-500 ease-in-out'>
                        {tech2}
                    </h1>
                    <h1 className='px-6 py-3 bg-blue-700 text-white rounded-lg text-center hover:bg-orange-300 
                transition-all duration-500 ease-in-out'>
                        {tech3}
                    </h1>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard
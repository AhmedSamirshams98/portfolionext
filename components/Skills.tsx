import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black' id='skills'>
        <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center '>
            <div className='col-span-3 '>
                <p className='heading__mini'>My Skills</p>
                <h1 className='heading__primary'>Let,s Explore Popular <span className='text-yellow-300'>Skills </span>Experience</h1>
                <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem] '>
                    Some of My Skills .
                </p>
               
            </div>
            <div className='col-span-4'>
                <div className='grid grid-cols-1 md:grid-cols-4  gap-[1rem]  items-center'>
                    <SkillCard title="React JS" image="/images/react.svg" percent="90%" />
                    <SkillCard title="Css" image="/images/css.svg" percent="90%" />
                    <SkillCard title="javaScript" image="/images/js.svg" percent="80%" />
                    <SkillCard title="Redux" image="/images/redux.jpg" percent="70%" />
                    <SkillCard title="HTML" image="/images/html.svg" percent="90%" />
                    <SkillCard title="TailWind" image="/images/tailwind.svg" percent="90%" />
                    <SkillCard title="NextJS" image="/images/nextjs.svg" percent="80%" />
                    <SkillCard title="Node JS" image="/images/node.svg" percent="90 %" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills
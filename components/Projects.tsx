import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link'





const Projects = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 ' id='projects'>
        <div className='text-center'>
            <p className='heading__mini'>Recent Works</p>
            <h1 className='heading__primary'>My Best <span className='text-yellow-300'>Projects</span></h1>
        </div>
        <Link href={"https://ahmedsamirshams98.github.io/reactcommerce/"}>
        <ProjectCard title="Ecommerce WebSite " tech1="React" tech2="Java Script" tech3="Css" 
         image="/images/last.jpg" link="https://ahmedsamirshams98.github.io/reactcommerce/"  />
        </Link>
        <Link href={"https://cute-starship-70e068.netlify.app/"}>
        <ProjectCard title="Travel WebSite " tech1="React" tech2="Java Script" tech3="TailWind" 
         image="/images/2.jpg" link="https://travesite-sun.netlify.app/"  />
        </Link>
        <Link href={"https://cute-starship-70e068.netlify.app/"}>
        <ProjectCard title="Ecommerce Woman Clothes Shop " tech1="React" tech2="Java Script" tech3="TailWind" 
         image="/images/clothes.jpg" link='https://cute-starship-70e068.netlify.app/'  />
        </Link>
        <Link href={"https://cute-starship-70e068.netlify.app/"}>
        <ProjectCard title="Food Website " tech1="Next" tech2="Type Script" tech3="TailWind" 
         image="/images/4.jpg" link='https://sun-rest.vercel.app/'  />
        </Link>
        <Link  href="https://restas.netlify.app/" >
        <ProjectCard title="Restaurant " tech1="React" tech2=" Java Script" tech3="TailWind" 
         image="/images/6.jpg"  link="https://restas.netlify.app/" />
        </Link>
        <Link href={"https://famous-dusk-b1f3a6.netlify.app/"}>
        <ProjectCard title="Book Shop " tech1="React" tech2="JavaScript" tech3="TailWind" 
         image="/images/10.jpg" link="https://famous-dusk-b1f3a6.netlify.app/"  />
        </Link>
        <Link href={"https://frabjous-tiramisu-5c936d.netlify.app/"}>
        <ProjectCard title="Ecommerce" tech1="React" tech2="JavaScript" tech3="TailWind" 
         image="/images/13.jpg" link="https://frabjous-tiramisu-5c936d.netlify.app/"  />
        </Link>
         
        
         
      
          
       
       
        

    </div>
  )
}

export default Projects

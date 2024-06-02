import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#0b0c13] ' id='services'>
        <div className='text-center '>
            <p className='heading__mini'>Popular Services</p>
            <h1 className='heading__primary'>My Special <span className='text-yellow-300'>Services </span>For You</h1>
        </div>
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 
        gap-[3rem] items-center'>
            <div>
                <ServicesCard title='React' num='01' paragraph='React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps' />
            </div>
            <div>
                <ServicesCard title='Next JS' num='2' paragraph='Next.js enables you to create high-quality web applications with the power of React components.' />
            </div>
            <div>
                <ServicesCard title='TailWind' num='03' paragraph='A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.' />
            </div>
            <div>
                <ServicesCard title='JavaScript' num='04'  paragraph='an object-oriented computer programming language commonly used to create interactive effects within web browsers.'/>
            </div>

        </div>
    </div>
  )
}

export default Services
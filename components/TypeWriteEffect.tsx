import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'a FrontEnd Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'a React Developer',
        1000,
        'a NextJS Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className='text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 
      font-bold text-white'
      repeat={Infinity}
    />
  )
}

export default TypeWriteEffect
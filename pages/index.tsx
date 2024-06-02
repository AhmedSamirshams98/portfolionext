import AboutMe from '@/components/AboutMe';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav'
import Navmobile from '@/components/NavMobile'
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";



const index = () => {
  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
      }
    );
    AOS.refresh();
  },[]);
  
  const[showNav,setShowNav]=useState(false);
  const showNavHandler=()=>setShowNav(true);
  const closeNavHandler=()=>setShowNav(false);
  return (
    <div className="overflow-hidden ">
      <Navmobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />

      {/**Hero */}
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default index
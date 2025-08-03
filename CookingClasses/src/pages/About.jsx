import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero'
import AboutUs from '../components/AboutUs'
import AboutBanner from '../components/AboutBanner'
import LimitedPeriod from '../components/LimitedPeriod'
import WhatWeOffer from '../components/WhatWeOffer'
import ViewCourses from '../components/ViewCourses'
import OurValues from '../components/OurValues'

function About() {
   useEffect(() => {
    document.title = "Flavour Theory | About";
  }, []); 
  return (
    <div className="min-h-screen bg-[#fff7f1] ">
        <AboutHero />
        <AboutUs />
        <AboutBanner />
        <WhatWeOffer />
        <LimitedPeriod />
        <OurValues />
        <ViewCourses />
    </div>
  )
}

export default About
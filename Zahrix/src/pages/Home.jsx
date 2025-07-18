import React from 'react';
import Hero from '../components/Home/Hero';
import AboutUs from '../components/Home/AboutUs';
import OurServices from '../components/Home/OurServices';
import ServiceCards from '../components/Home/ServiceCards';
import OurTestimonials from '../components/Home/OurTestimonials';
import Connect from '../components/Home/Connect';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <ServiceCards />
      <OurTestimonials />
      <Connect />
    </>
  );
};

export default Home;

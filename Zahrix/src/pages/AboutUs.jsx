import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/images/about_hero.png";
import AboutBanner from "../components/AboutUs/AboutBanner";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import OurApproach from "../components/AboutUs/OurApproach";
import AboutUs from "../components/Home/AboutUs";
const About = () => {
  return (
    <>
      <AboutBanner />
      <AboutUs />
      <WhoWeAre />
      <OurApproach />
      
    </>
  );
};

export default About;

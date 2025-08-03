import React, { useEffect } from 'react';
import HomeHero from "../components/HomeHero";
import FeaturedCourses from "../components/FeaturedCourses";
import LimitedPeriod from "../components/LimitedPeriod";
import AllCourses from "../components/AllCourses";
import ViewCourses from "../components/ViewCourses";
import Faq from "../components/Faq";

function Home() {
  useEffect(() => {
              document.title = "Flavour Theory | Home";
            }, []);
  return (
    <div className="min-h-screen">
      <HomeHero />
      <FeaturedCourses />
      <AllCourses />
      <LimitedPeriod />
      <Faq />
      <ViewCourses />
    </div>
  );
}

export default Home;
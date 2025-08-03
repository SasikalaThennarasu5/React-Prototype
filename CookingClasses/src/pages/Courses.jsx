import React, { useEffect } from 'react';
import FeaturedCourses from '../components/FeaturedCourses';
import LimitedPeriod from '../components/LimitedPeriod';
import AllCourses from '../components/AllCourses';
import ViewCourses from '../components/ViewCourses';

function Courses() {
  useEffect(() => {
              document.title = "Flavour Theory | Courses";
            }, []);
  return (
    <div className="min-h-screen bg-[#fff7f1] ">
        <FeaturedCourses />
        <AllCourses />
        <LimitedPeriod />
        <ViewCourses />
    </div>
  )
}

export default Courses
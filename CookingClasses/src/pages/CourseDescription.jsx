import React, { useEffect } from 'react';
import CourseDescriptionHero from '../components/CourseDescriptionHero';
import CourseCurriculum from '../components/CourseCurriculum';
import banner3Image from '../assets/images/recipe.png';
import Testimonials from '../components/Testimonials';
import ViewCourses from '../components/ViewCourses';
import bannerImage from '../assets/images/features.png';
import SampleVideo from '../components/SampleVideo';
import Features from '../components/Features';

const CourseDescription = () => {
    useEffect(() => {
            document.title = "Flavour Theory | CourseDescription";
          }, []);
    return (
        <div className="w-full flex flex-col items-center bg-[#fff7f0] px-4 text-center">

            <CourseDescriptionHero />
            <CourseCurriculum />
            
            <SampleVideo />
            <Testimonials />
            
            <Features />

            <ViewCourses />
            
        </div>
    );
};

export default CourseDescription;
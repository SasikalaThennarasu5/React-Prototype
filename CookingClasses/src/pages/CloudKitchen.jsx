import React, { useEffect } from 'react';
import ViewCourses from '../components/ViewCourses';
import CloudKitchenBanner from '../components/CloudKitchenBanner';
import Features from '../components/Features';


function CloudKitchen() {
  useEffect(() => {
        document.title = "Flavour Theory | CloudKitchen";
      }, []);
  return (
        <div className="w-full flex flex-col items-center bg-white px-4 text-center mt-10">
           
            <CloudKitchenBanner />

           
            <Features />




            <ViewCourses />
        </div>
    );
};

export default CloudKitchen
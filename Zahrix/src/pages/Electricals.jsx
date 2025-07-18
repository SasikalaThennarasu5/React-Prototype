import React from 'react';
import OurServices from '../components/Electricals/OurServices';
import electricalhero from '../assets/images/renovation-profile-concentrated-man-touching-screwdriver-lamp-kitchen-range-hood.png'; 
import { Link } from "react-router-dom";

import circle from "../assets/images/material-symbols_drag-click-rounded.png";
import person from '../assets/images/Screenshot 2025-06-12 165006.png';
const Electricals = () => {
  return (
    <>
     <section
      className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${electricalhero})` }}
    >
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center px-4 sm:px-8 sm:text-left sm:items-start flex flex-col items-center 
                      lg:left-48 lg:-translate-x-0 xl:left-64">
   
        <nav className="text-sm sm:text-lg md:text-xl mb-2">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-1 sm:mx-2">❯</span>
          <Link to="/services/electrical" className="hover:underline">Services</Link>
        </nav>

     
        <h2 className="text-base sm:text-lg md:text-2xl font-light">
          Sparking Innovation, Illuminating Lives
        </h2>
      </div>
    </section>
      <OurServices />

       <section className="bg-gray-50 mb-10 px-6 md:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="text-left max-w-xl w-full mx-auto lg:mx-40">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#4A66A0] font-bold mb-3 tracking-wide">
            Let’s Connect
          </h3>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#4A66A0] mb-5 leading-relaxed">
            We’re here to answer your <br /> questions and help
          </h2>
          <Link to="/contact">
            <button className="px-7 py-3 bg-[#4A66A0] hover:bg-blue-800 text-white font-medium rounded-md flex items-center gap-3 transition-all duration-200">
              <img src={circle} alt="icon" className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
      
        <div className="w-full lg:w-[42%] flex justify-center">
          <img
            src={person}
            alt="Connect with us"
            className="w-full max-w-md lg:max-w-full rounded-xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Electricals;

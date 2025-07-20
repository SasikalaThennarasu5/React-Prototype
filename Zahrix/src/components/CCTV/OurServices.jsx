import React from "react";
import {ArrowLeft } from "lucide-react";
import serviceBg from "../../assets/images/standard-quality-control-collage-concept.png";
import cctvIcon from "../../assets/images/Group 537.png";
import bmsIcon from "../../assets/images/Group 538.png";
import electricalIcon from "../../assets/images/Group 534.png";

const OurServices = () => {
  return (
    <section className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-black flex justify-center items-center gap-2">
          OUR SERVICES <span className="text-blue-600 text-2xl">⚡</span>
        </h3>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-700 my-4">
          Expert Services for a Safer, Smarter World
        </h2>
        <p>At ZAHRIX, we offer a comprehensive range of electrical services designed to meet the needs of homes and businesses. Our team of experts is dedicated to providing safe, efficient, and reliable electrical solutions.</p>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-black flex justify-center items-center gap-2 mt-4">
         Services We Offer<span className="text-blue-600 text-2xl">⚡</span>
        </h3>
      </div>

      {/* Row 1: Image + CCTV */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-10">
        {/* Image */}
        <div className="md:basis-[30%] w-full relative">
          <img
            src={serviceBg}
            alt="Service"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <p className="text-white text-base md:text-lg text-center font-semibold leading-snug">
                “Experience the best in electrical,<br /> CCTV, BMS Solutions “
              </p>
            </div>
        </div>

        {/* CCTV Card */}
        <div className="md:basis-[45%] w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-3 flex items-center gap-3">
              <img src={cctvIcon} alt="CCTV Icon" className="w-20 h-20" />
              CCTV Installation
            </h3>
            <p className="text-gray-600 text-base lg:text-lg xl:text-xl px-12">
             Expert CCTV installation services to enhance security and surveillance. Our team designs and installs customized CCTV systems for homes and business. Secure your property with our reliable solutions.<span className="text-blue-600 text-2xl">⚡</span>
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              Read More <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: BMS + Electrical */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* BMS Card */}
        <div className="md:basis-[45%] w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-3 flex items-center gap-3">
              <img src={bmsIcon} alt="BMS Icon" className="w-20 h-20" />
            CCTV Monitoring
            </h3>
            <p className="text-gray-600 text-base lg:text-lg xl:text-xl">
                Remote CCTV monitoring services for real-time surveillance and security. Our experts provide 24/7 monitoring to ensure your property is always protected. Stay connected and secure with our advanced monitoring solutions..<span className="text-blue-600 text-2xl">⚡</span>
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              Read More <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Electrical Card */}
        <div className="md:basis-[30%] w-full bg-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-3 flex items-center gap-3">
              <img src={electricalIcon} alt="Electrical Icon" className="w-20 h-20" />
              CCTV Maintenance
            </h3>
            <p className="text-gray-600 text-base lg:text-lg xl:text-xl">
               Regular CCTV maintenance to ensure system uptime and reliability. Stay connected and secure with our advanced maintenance solutions. Our technicians perform routine checks and repairs to keep your CCTV system running smoothly.<span className="text-blue-600 text-2xl">⚡</span>
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
              Read More <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default OurServices;

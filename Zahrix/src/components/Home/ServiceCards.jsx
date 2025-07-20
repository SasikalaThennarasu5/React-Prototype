import React from "react";
import card1 from "../../assets/images/Screenshot 2025-06-12 102855.png";
import card2 from "../../assets/images/renovation-profile-concentrated-man-touching-screwdriver-lamp-kitchen-range-hood.png";
import card3 from "../../assets/images/electrician-overalls-focused-work-switchboard-with-fuses-using-tablet.png";
import arrowIcon from "../../assets/images/material-symbols_drag-click-rounded.png"; 

const ServiceCards = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-8 md:px-16 lg:px-24">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-black flex items-center justify-center gap-2">
          OUR PROJECTS <span className="text-blue-600 text-2xl">⚡</span>
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-blue-700 mt-2">
          Electric Solutions for a Brighter Tomorrow
        </h2>
      </div>

      {/* Project Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
    <img src={card1} alt="Project 1" className="w- h-100 object-cover" />
  </div>

  <div className="bg-white rounded-2xl shadow-md overflow-visible relative flex flex-col h-full mt-20">
  <img src={card2} alt="Project 2" className="w-full h-100 object-cover" />

  <div className="absolute inset-0 bg-black bg-opacity-50 text-white px-4 py-6 flex flex-col justify-end text-center">
    <div>
      <h4 className="text-xl font-semibold mb-4">LED Lighting Retrofit</h4>
      <p className="text-sm  mb-4">
        Illuminating spaces with energy-efficient LED lighting solutions, reducing energy consumption and maintenance costs.
      </p>
      <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2">
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="w-12 h-12 bg-[#4A66A0] rounded-full p-2 shadow-lg"
        />
      </div>
    </div>
  </div>
</div>



  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
    <img src={card3} alt="Project 3" className="w-full h-100 object-cover" />
  </div>
</div>


      {/* View All Works Button */}
      <div className="flex justify-center mt-32">
        <button className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-800 transition">
          <img src={arrowIcon} alt="View Icon" className="w-5 h-5" />
          <span className="text-base font-medium">View All works</span>
        </button>
      </div>
    </section>
  );
};

export default ServiceCards;

import React from "react";
import aboutBg from "../../assets/images/about_hero.png"; // adjust path as needed

const AboutBanner = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Home <span className="text-blue-500">❯|</span> About Us
        </h2>
        <p className="text-lg md:text-xl">
          Sparking Innovation, Illuminating Lives
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;

import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/images/Group 6.png"; // adjust path if needed

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdf4ec] py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="Chef baking"
            className="rounded-[30px] w-full h-auto shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 bg-white rounded-[30px] shadow-lg flex flex-col justify-center items-center px-6 md:px-10 py-8 border-l-[20px] border-[#A7C957]">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center text-black leading-tight">
            TAKE YOUR COOKING SKILLS<br />
            TO THE NEXT LEVEL WITH MASTER<br />
            CHEFS
          </h1>

          <p className="text-center text-black mt-4 text-sm md:text-base leading-relaxed">
            CULINARY TIPS AND TRICKS STRAIGHT FROM THE EXPERT, ON HOW TO COOK
            SCRUMPTIOUS, INSTAGRAM READY, LIP SMACKING DISHES THAT ARE CLEAN,
            HEALTHY, AND ENERGIZING.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="mt-6 bg-[#D8573D] hover:bg-[#c84c34] text-white font-semibold px-6 py-2 rounded-full shadow"
          >
            VIEW COURSES
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

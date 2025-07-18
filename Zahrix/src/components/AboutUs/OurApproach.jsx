import React from "react";
import cctvImg from "../../assets/images/Group 537.png";
import approachImg from "../../assets/images/Rectangle 48.png";

const OurApproach = () => {
  return (
    <section className=" py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Image Section */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="relative">
            <img
              src={approachImg}
              alt="Approach"
              className="w-full h-[420px] object-cover rounded-2xl shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-[220px] h-[220px] bg-gradient-to-br from-[#4A66A0] to-[#2e4172] opacity-70 rounded-2xl z-0"></div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-sm font-bold tracking-wide uppercase text-[#4A66A0] mb-2">
            Our Approach
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 leading-tight">
            Powering Communities with Safe <br className="hidden md:block" />
            & Reliable Solutions
          </h2>

          {/* Mission Card */}
          <div className="bg-white border-l-4 border-[#4A66A0] p-6 rounded-xl shadow mb-6">
            <div className="flex items-start gap-4 mb-2">
              <img src={cctvImg} alt="Mission Icon" className="w-14 h-14" />
              <h4 className="text-xl font-semibold text-gray-900">Our Mission</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-quality electrical services that ensure safety, efficiency, and customer satisfaction — while building long-term relationships and supporting community well-being.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white border-l-4 border-[#4A66A0] p-6 rounded-xl shadow">
            <div className="flex items-start gap-4 mb-2">
              <img src={cctvImg} alt="Vision Icon" className="w-14 h-14" />
              <h4 className="text-xl font-semibold text-gray-900">Our Vision</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading provider of innovative electrical solutions,
              exceeding customer expectations and raising the standards of excellence in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

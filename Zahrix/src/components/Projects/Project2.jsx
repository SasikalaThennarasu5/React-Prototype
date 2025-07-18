import React from 'react';
import img1 from '../../assets/images/jk.png';
import img2 from '../../assets/images/j.png';
import img3 from '../../assets/images/k.png';

const Project2 = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-blue text-center my-4">
        02
      </h2>
      <h2 className="text-3xl font-bold text-black text-center">
        BMS Integration at DEF Hospital
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 px-4 lg:px-16 py-10 mx-4 md:mx-10">
        {/* Left Image Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-1/3">
          <img src={img1} alt="Inspection" className="w-full h-full object-cover" />
        </div>

        {/* Middle Card with Centered Overlay Text */}
        <div className="relative overflow-visible rounded-3xl shadow-lg w-full lg:w-1/3 mt-10 lg:mt-28">
          <img
            src={img2}
            alt="BMS Integration"
            className="w-full h-[500px] md:h-[550px] lg:h-[600px] object-cover rounded-3xl"
          />

          {/* Centered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Smart BMS Automation
            </h3>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              Integrating advanced BMS systems to streamline building operations,
              improve efficiency, and reduce operational costs.
            </p>
          </div>

          {/* Bootstrap Icon at Bottom Center */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4A66A0] rounded-full flex items-center justify-center shadow-lg">
              <i className="bi bi-arrow-up text-white text-xl md:text-2xl"></i>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-1/3">
          <img src={img3} alt="Control Panel" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default Project2;

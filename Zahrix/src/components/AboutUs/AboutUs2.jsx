import React from "react";
import mainImg from "../../assets/images/Rectangle 371.png";
import smallImg from "../../assets/images/Rectangle 372.png";

const WhoWeAre = () => {
  return (
    <section className=" py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full text-left">
          <p className="text-sm text-blue-700 font-semibold uppercase mb-3 tracking-widest">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Trusted Experts in Electrical Services
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>ZAHIRX</strong>, we're the trusted experts in electrical services. With years of
            experience and a team of skilled professionals, we deliver top-notch
            electrical solutions for homes and businesses. Our expertise spans
            installations, repairs, and maintenance, ensuring your safety and satisfaction.
            <br /><br />
            Our goal is to build long-term relationships with our clients,
            providing them with peace of mind and efficient electrical systems.
            With ZAHIRX, you can trust your electrical needs are in good hands.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative w-full">
          <div className="w-full max-w-[420px] mx-auto">
            <img
              src={mainImg}
              alt="Electrical Worker"
              className="rounded-3xl w-full h-[460px] object-cover shadow-2xl"
            />
            <img
              src={smallImg}
              alt="Toolbelt"
              className="absolute -bottom-6 -right-6 w-[180px] h-[180px] rounded-xl object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

import React from "react";
import { Zap } from "lucide-react";
import mainImg from "../../assets/images/Rectangle 371.png";
import smallImg from "../../assets/images/Rectangle 372.png";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr,2fr] gap-20 items-center">
        <div>
          <div className="flex items-center mb-3">
            <Zap className="text-[#4A66A0]" size={22} />
            <h3 className="text-black font-semibold tracking-wide text-lg ml-2">WHO WE ARE</h3>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4A66A0] mb-6">
            Trusted experts in electrical Services
          </h2>

          <p className="text-gray-800 text-base leading-relaxed">
            At ZAHIRX, we're the trusted experts in electrical services. With years of experience and a team of skilled professionals, we deliver top-notch electrical solutions for homes and businesses. Our expertise spans electrical installations, repairs, and maintenance, ensuring your safety and satisfaction. We're committed to providing exceptional service, transparency, and reliability.
            <br /><br />
            Our goal is to build long-term relationships with our clients, providing them with peace of mind and efficient electrical systems. With ZAHIRX, you can trust that your electrical needs are in good hands.
          </p>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          <img
            src={mainImg}
            alt="Electrical Worker"
            className="rounded-3xl w-[400px] h-[450px] object-cover shadow-xl"
          />
          <img
            src={smallImg}
            alt="Toolbelt"
            className="absolute -bottom-6 -left-6 w-[220px] h-[220px] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

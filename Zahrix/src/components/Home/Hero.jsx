import React from 'react';
import worker from '../../assets/images/hero-worker.png';
import blueCircle from '../../assets/images/Group 538j.png';
import lightningIcon from '../../assets/images/Group 24.png';
import likeIcon from '../../assets/images/Group 574.png';
import waveBg from '../../assets/images/image 1.png';
import verifiedIcon from '../../assets/images/ic_round-gpp-good.png';

const Hero = () => {
  return (
    <section className="relative bg-white px-4 py-10 md:py-16 overflow-hidden">
      <img
        src={waveBg}
        alt="Wave Background"
        className="absolute top-0 right-0 w-[400px] md:w-[600px] z-0"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-black">
            Transforming Safety and Security With <br /> Cutting-Edge Technology
          </h1>

          <h2 className="text-xl md:text-2xl text-[#4A66A0] font-semibold">
            Empowering Your Space with Innovative Solutions
          </h2>

          <p className="text-gray-800 max-w-xl text-base md:text-lg">
            <span className="font-bold text-[#4A66A0]">Zahrix</span> provides cutting-edge electrical, CCTV, and BMS services to enhance your building's
            efficiency, safety, and security. Trust us to illuminate your world. Our expertise ensures a safer,
            more secure, and efficient environment. We design, install, and maintain systems that protect people,
            property, and assets.
          </p>

          <button className="bg-[#4A66A0] text-white px-6 py-3 rounded hover:bg-[#3a4f85] font-medium">
            Discover Our Services
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              ['500+', 'Locations In the Country'],
              ['25+', 'Years Of Experience'],
              ['200+', 'Specialized Workers']
            ].map(([value, label], idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg text-center py-6 px-4"
              >
                <h3 className="text-3xl font-bold text-[#4A66A0]">{value}</h3>
                <p className="text-[#4A66A0] font-medium text-sm md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right  */}
        <div className="relative flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-white border-[4px] border-[#4A66A0] top-[-60px] right-[30px] "></div>
          <img
            src={blueCircle}
            alt="Blue Circle"
            className="absolute top-[-60px] right-[30px] w-[400px] md:w-[520px] z-10"
          />
        

        <img
            src={worker}
            alt="Person"
            className="relative z-30 w-[550px] md:w-[660px] object-contain"
          />

           <div className="absolute top-[50px] left-[50px] bg-white rounded-full p-2 shadow-md z-40">
            <img src={likeIcon} alt="Lightning Icon" className="w-10 h-10" />
          </div> 
          <div className="absolute top-[150px] left-[20px] bg-white rounded-full p-2 shadow-md z-40">
            <img src={likeIcon} alt="Lightning Icon" className="w-10 h-10" />
          </div>
          <div className="absolute bottom-[100px] left-[100px] bg-white rounded-full p-2 shadow-md z-40">
            <img src={lightningIcon} alt="Lightning Icon" className="w-10 h-10" />
          </div>

          {/* Tooltip with Verified Icon */}
          <div className="absolute top-4 right-[-50px] md:top-20 md:right-[-50px] bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-3 z-40">
  <img src={lightningIcon} alt="Zap Icon" className="w-10 h-10" />
  <span className="text-sm font-medium text-black leading-tight">
    Unlock a safer tomorrow <br /> with Zahrix !
  </span>
  <img src={verifiedIcon} alt="Verified Icon" className="w-10 h-10" />
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

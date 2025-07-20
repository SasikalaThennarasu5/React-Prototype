import React from 'react';
import careerbg from '../assets/images/Screenshot 2025-06-12 123446.png';
import CareerForm from '../components/CareerForm'; 

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{ backgroundImage: `url(${careerbg })` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative text-white px-6 md:px-16">
          <div className="text-lg md:text-xl mb-1">
            <span className="font-semibold">Home</span>
            <span className="mx-2">➤</span>
            <span className="font-semibold">Careers</span>
          </div>
          <p className="text-sm md:text-base font-light">
            Sparking Innovation, Illuminating Lives
          </p>
        </div>
      </div>

      {/* Job Application Form Section */}
      <div className="max-w-7xl mx-auto">
        <CareerForm />
      </div>
    </>
  );
};

export default Careers;

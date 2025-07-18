import React from 'react';
import projectBg from '../../assets/images/Screenshot 2025-06-12 152226.png';
import 'bootstrap-icons/font/bootstrap-icons.css'; // if not already imported globally

const ProjectBanner = () => {
  return (
    <section
      className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white text-center px-4 sm:px-8 sm:text-left sm:items-start flex flex-col items-center 
                      lg:left-48 lg:-translate-x-0 xl:left-64">
        <nav className="text-sm sm:text-lg md:text-xl mb-2 flex items-center gap-2">
          <span className="font-semibold">Home</span>
          <i className="bi bi-chevron-right"></i>
          <span className="font-bold">Projects</span>
        </nav>

        <h2 className="text-base sm:text-lg md:text-2xl font-light">
          Sparking Innovation, Illuminating Lives
        </h2>
      </div>
    </section>
  );
};

export default ProjectBanner;

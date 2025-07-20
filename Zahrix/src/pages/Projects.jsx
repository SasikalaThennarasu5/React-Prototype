import React from 'react';
import ProjectBanner from '../components/Projects/ProjectBanner';
import Project1 from '../components/Projects/Project1';
import Project2 from '../components/Projects/Project2';
import Project3 from '../components/Projects/Project3';
import expertiseIcon from '../assets/images/Group 574.png';
import installationIcon from '../assets/images/Group 568.png';
import safetyIcon from '../assets/images/Group 573.png';

const services = [
  {
    icon: expertiseIcon,
    title: 'Expertise',
  },
  {
    icon: installationIcon,
    title: 'Electrical Installation',
  },
  {
    icon: safetyIcon,
    title: 'Safety Maintenance',
  },
];

const Projects = () => {
  return (
    <>
      <ProjectBanner />
      <Project1 />
      <Project2 />
      <Project3 />

      <div className="bg-gray-100 py-12 px-4 mb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-6 ${
                index !== 0 ? 'md:border-l md:border-black' : ''
              }`}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

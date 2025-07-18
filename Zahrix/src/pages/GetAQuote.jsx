import React from 'react';
import contactImage from '../assets/images/Screenshot 2025-06-12 152750.png'; 
import ContactForm from '../components/ContactForm';
const GetAQuote = () => {
  return (
    <div className="text-center py-20">
      <section className="relative h-[500px] bg-gray-900">
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{ backgroundImage: `url(${contactImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center justify-end text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-2xl font-medium mb-4">
            <span>Home</span>
            <span className="mx-2">❯</span>
            <span className="font-semibold">Contact Us</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
            Sparking Innovation, Illuminating Lives
          </h1>
        </div>
      </div>
    </section>
    <ContactForm />
    </div>
  );
};

export default GetAQuote;

import React, { useState } from 'react';
import arrowRight from '../assets/images/material-symbols_drag-click-rounded.png';
import { FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    acceptedTerms: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 lg:py-20 text-black">
        <h1 className="text-4xl font-extrabold text-center">Get In Touch With Us</h1>
        <p className="text-xl text-center text-gray-600 mt-2 mb-10">
          For More Information About Our <span className="font-medium">Services.</span>
        </p>

        <h2 className="text-3xl md:text-2xl font-semibold mb-2">
          Booking Your Service Today! ⚡
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl leading-relaxed">
          Whether you're planning a new project or need emergency support,
          we’re available to provide fast and reliable assistance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12"
        >
          {/* Form Fields */}
          {[
            { label: 'First Name', name: 'firstName', placeholder: 'e.g. John' },
            { label: 'Last Name', name: 'lastName', placeholder: 'e.g. Doe' },
            { label: 'Email Address', name: 'email', placeholder: 'e.g. john@example.com' },
            { label: 'Phone Number', name: 'phone', placeholder: 'e.g. 9876543210' },
            { label: 'Preferred Date', name: 'date', placeholder: 'e.g. 05/09/2025' },
            { label: 'Preferred Time', name: 'time', placeholder: 'e.g. 10:00 AM' },
          ].map(({ label, name, placeholder }, i) => (
            <div key={i}>
              <label className="block text-[#3C5A99] text-lg font-semibold mb-2">
                {label}
              </label>
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-[#3C5A99] rounded-lg px-4 py-5 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 md:col-span-2 mt-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="w-5 h-5 mt-1 accent-[#3C5A99]"
              required
            />
            <label className="text-sm md:text-base font-medium leading-snug">
              I accept the Terms and Privacy Policy.
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-[#3C5A99] text-white flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <img src={arrowRight} alt="submit icon" className="w-5 h-5" />
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-8 text-center relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-5" />
            <p className="text-lg font-medium mb-6">
              We've received your request. Our team will get in touch shortly.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#3C5A99] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;

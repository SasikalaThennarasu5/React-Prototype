import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdSend, MdCancel } from 'react-icons/md';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      resume: null,
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-5 bg-white py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center">WE ARE HIRING !</h1>
      <p className="text-gray-600 text-center mt-2 mb-10 text-lg max-w-3xl mx-auto">
        We appreciate your interest in joining Zahrix Electromechanical Services.
        <br /> Currently, we do not have any open positions.</p>

      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Application Form</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* RIGHT COLUMN (swapped order) */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* Resume Upload */}
          <div>
            <label className="block text-lg font-medium">Resume<span className="text-red-500">*</span></label>
            <div className="border rounded py-6 px-4 text-center bg-gray-50">
              <p className="text-gray-500 mb-1 text-base">Upload only PDF format</p>
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="mx-auto text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">Max Size: 10 MB</p>
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-lg font-medium">Additional Info</label>
            <textarea
              name="address"
              rows="4"
              className="w-full border rounded py-3 px-4 text-base resize-none"
              placeholder="Tell us about yourself..."
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-base">Share Job:</span>
            <a href="#" className="text-gray-800 hover:text-blue-600 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-800 hover:text-blue-600 text-xl"><FaXTwitter /></a>
            <a href="#" className="text-gray-800 hover:text-blue-600 text-xl"><FaLinkedinIn /></a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md text-base"
            >
              <MdSend className="text-xl" />
              Submit
            </button>
           
          </div>
        </div>

        {/* LEFT COLUMN */}
        <div className="space-y-6 order-1 lg:order-2">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium">Full Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              className="w-full border rounded py-3 px-4 text-base"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium">Email Address<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              className="w-full border rounded py-3 px-4 text-base"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-lg font-medium">Phone Number<span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded py-3 px-4 text-base"
              placeholder="+91-9876543210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <p className="text-green-700 font-medium text-base mt-4">
           Thank You For Considering Zahrix As Your Future Workplace!
          </p>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;

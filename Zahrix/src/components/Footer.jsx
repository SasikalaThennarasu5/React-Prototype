import React from "react";
import { Link } from 'react-router-dom'; 
import logo from "../assets/images/logo.png";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4B69A9] text-white font-[Montserrat] ">
      <div className="max-w-7xl mx-auto px-6 py-10"> 
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:w-2/3">
            <div className="flex items-center mb-4">
              <img src={logo} alt="logo" className="w-16 h-16 rounded-full object-contain" />
              <h4 className="text-2xl font-semibold ml-3">ZAHRIX</h4>
            </div>

            <p className="mb-6 text-lg max-w-lg">
              “At ZAHRIX Delivering Electrical Solutions With Precision and Care”
            </p>

            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="bg-white text-[#4B69A9] p-2 rounded-full mr-4">
                  <FaEnvelope />
                </span>
                Zahrix@gmail.com
              </li>
              <li className="flex items-center">
                <span className="bg-white text-[#4B69A9] p-2 rounded-full mr-4">
                  <FaMapMarkerAlt />
                </span>
                23/9, Main Road Chennai.
              </li>
              <li className="flex items-center">
                <span className="bg-white text-[#4B69A9] p-2 rounded-full mr-4">
                  <FaPhoneAlt />
                </span>
                +91 86456780987
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:w-1/3">
            <h5 className="text-xl font-bold mb-4">Subscribe</h5>
            <div className="flex mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-black rounded-l-md outline-none"
              />
              <button className="bg-black text-white px-5 py-2 rounded-r-md font-bold">
                SIGN UP
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              {/* Quick Links */}
              <div>
                <h6 className="font-semibold text-base mb-2">Quick Links</h6>
                <ul className="space-y-1">
  <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
  <li><Link to="/electricals" className="hover:underline">Our Services</Link></li>
  <li><Link to="/" className="hover:underline">Testimonials</Link></li>
  <li><Link to="/get-a-quote" className="hover:underline">Contact Us</Link></li>
</ul>

              </div>

              {/* Useful Links */}
              <div>
                <h6 className="font-semibold text-base mb-2">Useful Links</h6>
                <ul className="space-y-1">

<ul>
    <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
    <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
    <li><Link to="/careers" className="hover:underline">Careers</Link></li>
  </ul>

                </ul>
              </div>

              {/* Social Icons */}
              <div className="flex flex-col items-center space-y-3">
                <span className="bg-white text-[#4B69A9] p-2 rounded-full">
                  <FaLinkedinIn />
                </span>
                <span className="bg-white text-[#4B69A9] p-2 rounded-full">
                  <FaInstagram />
                </span>
                <span className="bg-white text-[#4B69A9] p-2 rounded-full">
                  <FaFacebookF />
                </span>
                <span className="bg-white text-[#4B69A9] p-2 rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-white mt-10 border-t border-white pt-5">
          @ 2025 Developed & Maintained by ZAHRIX – All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

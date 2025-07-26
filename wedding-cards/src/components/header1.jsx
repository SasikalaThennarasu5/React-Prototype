import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import headerLogo from '../assets/images/headerlogo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const handleToggle = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#E6E6FA] px-6 py-4 relative z-50">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div className="flex-shrink-0">
          <img src={headerLogo} alt="Logo" className="w-[250px] h-auto" />
        </div>

        <div className="flex-1 mx-6 max-w-xl w-full relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-4 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600" />
        </div>

        <div className="flex items-center space-x-6 text-2xl text-black">
          <FaUser className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Bottom nav with dropdowns */}
      <nav className="mt-6 relative" ref={navRef}>
        <ul className="flex flex-wrap justify-center gap-10 text-lg lg:text-2xl font-semibold text-black">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Wedding Invitation</li>

          {/* Special Occasions */}
          <li className="relative cursor-pointer" onClick={() => handleToggle('special')}>
            Special occasions
            {activeDropdown === 'special' && (
              <ul className="absolute left-0 top-full mt-2 w-64 bg-[#FFE4B5] shadow-lg rounded-lg text-black p-4 space-y-2 text-base z-50">
                {[
                  'Birthday Invitations',
                  'Puberty Cards',
                  'Luxury Invitations',
                  'Ear Boring Cards',
                  'Engagement Cards',
                  'House Warming',
                  'Anniversary Cards',
                ].map((item) => (
                  <li key={item} className="hover:bg-orange-400 hover:text-white px-2 py-1 rounded cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Theme Cards */}
          <li className="relative cursor-pointer" onClick={() => handleToggle('theme')}>
            Theme Cards
            {activeDropdown === 'theme' && (
              <ul className="absolute left-0 top-full mt-2 w-64 bg-[#FFE4B5] shadow-lg rounded-lg text-black p-4 space-y-2 text-base z-50">
                {[
                  'Beach Theme Cards',
                  'Bride Theme Cards',
                  'Box Card',
                  'Single Sheet Cards',
                ].map((item) => (
                  <li key={item} className="hover:bg-orange-400 hover:text-white px-2 py-1 rounded cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Scroll Invitation */}
          <li className="relative cursor-pointer" onClick={() => handleToggle('scroll')}>
            Scroll Invitation
            {activeDropdown === 'scroll' && (
              <ul className="absolute left-0 top-full mt-2 w-64 bg-[#FFE4B5] shadow-lg rounded-lg text-black p-4 space-y-2 text-base z-50">
                {[
                  'Small Size Scroll',
                  'Box Scroll',
                  'Only Scroll',
                  'High End Scroll',
                ].map((item) => (
                  <li key={item} className="hover:bg-orange-400 hover:text-white px-2 py-1 rounded cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Digital Invitation */}
          <li className="relative cursor-pointer" onClick={() => handleToggle('digital')}>
            Digital Invitation
            {activeDropdown === 'digital' && (
              <ul className="absolute right-0 top-full mt-2 w-64 bg-[#FFE4B5] shadow-lg rounded-lg text-black p-4 space-y-2 text-base z-50">
                {['Whatsapp Card', 'Save the Date Cards'].map((item) => (
                  <li key={item} className="hover:bg-orange-400 hover:text-white px-2 py-1 rounded cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

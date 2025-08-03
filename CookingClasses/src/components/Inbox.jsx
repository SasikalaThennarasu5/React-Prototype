import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const ChatSection = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="bg-[#fff5e4] py-16 px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug">
            Homemakers to busy executives, budding chefs to food entrepreneurs, <br />
            grandparents to moms, health conscious people or foodies – there’s a course for all.
          </p>
          <Link to="/course">
            <button className="mt-10 bg-[#b94646] hover:bg-[#a33f3f] text-white text-lg font-semibold px-8 py-3 rounded-full transition duration-300">
              VIEW COURSES
            </button>
          </Link>
        </div>

        {/* Chat icon */}
        <div className="absolute bottom-6 right-6 z-50">
          <button onClick={() => setShowChat(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a5cd39" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5v10.5H6.75L3.75 19.5V5.25z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Chat window */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-[#FFF7F0] rounded-3xl shadow-2xl z-[999] overflow-hidden">
          <div className="flex justify-between items-center px-4 py-2 bg-[#FEECDC] rounded-t-3xl">
            <h2 className="text-lg font-semibold">Inbox</h2>
            <button onClick={() => setShowChat(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="p-4 flex flex-col space-y-4">
            <div className="flex items-start space-x-2">
              <div className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">S</div>
              <div className="bg-white text-black px-4 py-2 rounded-xl shadow text-sm">
                Hello there! Thank you for reaching out to us.
              </div>
            </div>
          </div>

          <div className="bg-white p-2 flex items-center justify-between rounded-b-3xl">
            <input
              className="flex-1 text-sm p-2 outline-none text-gray-600"
              placeholder="Reply here"
            />
            <div className="flex space-x-2 px-2">
              <button>📎</button>
              <button>😊</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSection;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import vectorBg from '../assets/image copy.png';

const Body = () => {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    'Let Us Be Your',
    'Innovation Partner!',
    'Connecting Through Technology',
    'Solving Your Problems Together'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full h-full mt-10 overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
      
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-5 py-10 lg:px-20">
        
        {/* Left Side Text Section */}
        <div className="text-center lg:text-left text-white lg:w-1/2 relative z-10"> {/* Added z-index here */}
          <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl mb-4 text-shadow-lg">
            {textArray[currentText]}
          </h1>
          
        
          {/* Button Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
            <NavLink
              to="/contact"
              className="bg-white text-[#0849A8] rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition transform duration-300 hover:bg-[#0849A8] hover:text-white hover:scale-105"
            >
              Build With Us
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-white text-[#0849A8] rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition transform duration-300 hover:bg-[#0849A8] hover:text-white hover:scale-105"
            >
              Join Our Team
            </NavLink>
          </div>
        </div>

        {/* Right Side Vector Image Section */}
        <div className="lg:w-1/2 mt-12 mt-16 relative z-0"> {/* Lower z-index */}
          <img 
            src={vectorBg} 
            alt="decorative vector" 
            className="max-w-full h-auto mx-auto lg:mx-0 opacity-75 lg:opacity-100"
          />
        </div>
      </div>

      {/* Footer Section (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-30"></div>
    </div>
  );
};

export default Body;

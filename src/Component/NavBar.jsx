import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FiPhone } from 'react-icons/fi'; // Importing Phone icon from react-icons

const NavBar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Get current route path
  const location = useLocation();
  
  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   
<nav className="bg-[#fff] shadow fixed top-0 left-0 w-full z-50">
<div className="mx-7 md:mx-10 lg:mx-28 py-0 md:py-1 lg:py-2 ">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/"><img src={logo} alt="Logo" className="h-16 w-16 mr-5" /></NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <Link
        to="/"
        className={` ${
            location.pathname === '/' ? 'text-[#2D74C4]' : 'text-black'
        } hover:text-[#2D74C4]`}
        >
        Home
        </Link>

          <Link
            to="/service"
            className={` ${
              location.pathname === '/service' ? 'text-[#2D74C4]' : 'text-black'
            } hover:text-[#2D74C4]`}
          >
            Services
          </Link>
          <Link
            to="/products"
            className={` ${
              location.pathname === '/products' ? 'text-[#2D74C4]' : 'text-black'
            } hover:text-[#2D74C4]`}
          >
            Our Products
          </Link>
          <Link
            to="/about"
            className={` ${
              location.pathname === '/about' ? 'text-[#2D74C4]' : 'text-black'
            } hover:text-[#2D74C4]`}
          >
            About Us
          </Link>
          <Link
            to="/career"
            className={` ${
              location.pathname === '/career' ? 'text-[#2D74C4]' : 'text-black'
            } hover:text-[#2D74C4]`}
          >
            Career
          </Link>
          <Link
            to="/contact"
            className={` ${
              location.pathname === '/contact' ? 'text-[#2D74C4]' : 'text-black'
            } hover:text-[#2D74C4]`}
          >
            Contact Me
          </Link>
        </div>

        {/* Hire Me Button with Phone Icon - Email Link */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className="bg-[#2d74c4] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#2D74C4] transition duration-300 flex items-center"
          >
            <FiPhone className="w-5 h-5 mr-2" /> {/* React-icons Phone icon */}
            Demo
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 25 25"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-black hover:text-[#2D74C4]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden bg-[#fff]  mt-2 rounded-lg">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className={` ${
                location.pathname === '/' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/service"
              className={` ${
                location.pathname === '/service' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/products"
              className={` ${
                location.pathname === '/products' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              Our Products
            </Link>
            <Link
              to="/about"
              className={` ${
                location.pathname === '/about' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/career"
              className={` ${
                location.pathname === '/career' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              Career
            </Link>
            <Link
              to="/contact"
              className={` ${
                location.pathname === '/contact' ? 'text-[#2D74C4]' : 'text-black'
              } hover:text-[#2D74C4]`}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
            <a
              href="mailto:mnzkhadka1996@gmail.com"
              className="bg-[#2d74c4] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#2D74C4] transition duration-300 text-center flex items-center justify-center"
              onClick={toggleMenu}
            >
              <FiPhone className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
       
      )}
      </div>
    </nav>
  );
};

export default NavBar;
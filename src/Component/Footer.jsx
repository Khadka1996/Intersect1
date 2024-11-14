import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone ,FaArrowRightLong, FaLocationArrow} from "react-icons/fa6";
import { FaFacebook,FaInstagram ,FaTwitter,FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-[#132D80]'>
    <div className='mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
            <div className='flex flex-col gap-2 md:gap-6'>
                <div>
                    <h1 className='text-gray-400'>For Product Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><MdOutlineAttachEmail/></span><span>carreer@intersect.com</span></p>
                </div>
                <div>
                    <h1 className='text-gray-400'>For Contact Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><FaPhone /></span><span>9876543210</span></p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-400'>For Branch Information</h1>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Kathmandu, Nepal</span></p>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Jhapa, Nepal</span></p>
                    <p className='flex flex-row gap-2 items-center text-white'><span><IoLocationSharp /></span><span>Dolpa, Nepal</span></p>
                </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="name">Full Name</label>
                    <input type="text"  placeholder='Full name' className='p-2 rounded-md text-black'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="email">Email</label>
                    <input type="email"  placeholder='Email' className='p-2 rounded-md text-black'/>
                    </div>
                </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="subject">Subject</label>
                    <input type="text"  placeholder='Subject' className='p-2 rounded-md text-black'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Company Name">Company Name</label>
                    <input type="text"  placeholder='Company Name' className='p-2 rounded-md text-black'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Message">Message</label>
                    <textarea   placeholder='Message' className='p-2 rounded-md text-black'/>
                    </div>
                    <div>
                        <button className='flex flex-row items-center bg-[#569C27] text-white gap-1 p-3 rounded-md'><span>Send Message</span><FaArrowRightLong /></button>
                    </div>
                
            </div>

        </div>
        <div className='flex flex-row justify-between items-center'>
            <div className='overflow-hidden h-32'>
              <img className='h-full w-full object-cover' src={logo} alt="logo" />
            </div>
            <div className='flex flex-row gap-2'>
                <a href="www.facebook.com"><FaFacebook size={20} color='white'/></a>
                <a href="www.youtube.com"><FaYoutube size={20} color='white'/></a>
                <a href="www.instagram.com"><FaInstagram size={20} color='white'/></a>
                <a href="www.x.com"><FaTwitter size={20} color='white'/></a>

            </div>

        </div>
        <hr className='bg-white text-white border mb-3'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-lg text-white'>Contact Us</h1>
                <p className='text-gray-300'>Branch Office</p>
                <p className='text-white flex flex-row items-center gap-2'><IoLocationSharp/>Panchthar</p>
                <p className='text-gray-300'>Head Office</p>
                <p className='text-white flex flex-row items-center gap-2'><IoLocationSharp/>Kathmandu</p>
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-lg text-white'>Links</h1>
                <NavLink to="/" className='text-white text-lg'>Home</NavLink>
                <NavLink to="/about" className='text-white text-lg'>About Us</NavLink>
                <NavLink to="/career" className='text-white text-lg'>Career</NavLink>
                <NavLink to="/contact" className='text-white text-lg'>Contact</NavLink>
            </div>
            <div className='flex flex-col gap-1'>
                <h1 className='font-bold text-lg text-white'>Connect Us</h1>
                <a href="www.facebook.com" className='text-white '>carreer@intersect.com</a>
                <p  className='text-white '>987654321</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Footer
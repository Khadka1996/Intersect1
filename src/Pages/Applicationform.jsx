import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone ,FaArrowRightLong, FaLocationArrow} from "react-icons/fa6";
import { FaFacebook,FaInstagram ,FaTwitter,FaYoutube } from "react-icons/fa";
const Applicationform = () => {
  return (
    <div>
     <div className=' bg-blue-600 text-center flex flex-col h-[50vh] w-full justify-center items-center font-sans'>
        <h1 className='font-bold text-3xl text-white'>Application Form
             </h1>
             <h1 className='text-[#FFCD03] font-bold text-3xl'> We will reach you</h1>
      </div>
    <div className='mx-7 md:mx-10 lg:mx-28 lg:relative lg:top-[-100px] lg:z-20 '>
        <div className='grid grid-cols-1  gap-3 bg-[#70BF44] p-9 md:rounded-xl shadow'>
        <div className='flex flex-col gap-2 md:gap-5'>
                <div className='grid grid-cols-1  gap-3 md:gap-6'>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="name">Full Name</label>
                    <input type="text"  placeholder='Full name' className='p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="email">Email</label>
                    <input type="email"  placeholder='Email' className='p-2 rounded-md'/>
                    </div>
                </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="subject">Resume</label>
                    <input type="file"  placeholder='Subject' className='p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="subject">Subject</label>
                    <input type="text"  placeholder='Subject' className='p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Company Name">How did you hear about the Intersect?</label>
                    <input type="text"  placeholder='eg.facebook' className='p-2 rounded-md'/>
                    </div>
                    <div className='flex flex-col text-gray-100'>
                     <label htmlFor="Message">What is your main interest?</label>
                    <textarea   placeholder='eg.backend' className='p-2 rounded-md'/>
                    </div>
                    <div>
                        <button className='flex flex-row items-center bg-[#2b5510] text-white gap-1 p-3 rounded-full'><span>Submit</span><FaArrowRightLong /></button>
                    </div>
                
            </div>
        
          
        </div>
    </div>
    </div>
  )
}

export default Applicationform
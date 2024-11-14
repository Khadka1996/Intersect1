import React, { useEffect } from 'react';
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import vectorBg from '../assets/image.png';
import teamImage from '../assets/logo.png';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    const data = [
        { id: 1, name: "Binaya Limbu", position: "Software Engineer", image: teamImage },
        { id: 2, name: "Ranjan Dhakal", position: "Project Manager", image: teamImage },
        { id: 3, name: "Rajat Budhathoki", position: "Product Designer", image: teamImage },
        { id: 4, name: "Mausam Dahal", position: "Backend Developer", image: teamImage },
        { id: 5, name: "Shila Pandey", position: "Frontend Developer", image: teamImage },
    ];

    return (
        <div className="relative bg-cover bg-center bg-no-repeat">

            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-center flex flex-col h-[80vh] w-full justify-center items-center font-sans text-white overflow-hidden">
                <img src={vectorBg} alt="decorative vector" 
                    className="absolute left-10 bottom-5 w-48 md:w-64 lg:w-80 xl:w-96 opacity-60 lg:opacity-80" 
                />
                <h1 className="font-extrabold text-5xl lg:text-6xl tracking-wide text-shadow-lg">About Us</h1>
                <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    We are your trusted innovation partner, dedicated to driving progress and growth in every project.
                </p>
            </div>

            {/* About Section */}
          {/* About Section */}
<div className="mx-6 md:mx-12 lg:mx-24 my-12  bg-opacity-90 ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left Section: Mission Statement */}
        <div className="flex flex-col gap-6 text-gray-800" data-aos="fade-down">
            <h2 className="flex flex-row items-center gap-3 font-bold text-3xl text-[#0047A9]">
                Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                At Intersect Info Developers, we are committed to delivering innovative solutions that empower businesses to succeed. Our mission is to drive meaningful change through cutting-edge technology.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
                We focus on creating value, building long-term relationships, and pushing the boundaries of what's possible in our industry.
            </p>
        </div>

        {/* Right Section: Map + Location Information */}
        <div className="text-gray-700">
            <div className="flex flex-row items-center gap-3 font-semibold text-2xl text-[#0047A9]">
                <FaLocationDot />
                <h3 className="text-xl font-bold">Thanks for visiting us!</h3>
            </div>
            <hr className="w-full border border-gray-300 my-4" />
            
            {/* Map Section */}
            <div className="overflow-hidden rounded-lg shadow-md mt-4 relative">
                <div className="relative w-full h-[300px] md:h-[400px]">
                    {/* Replace with your map implementation */}
                    <iframe
                        className="rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.779122288662!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e5a7b43313237%3A0x900d0412f84d67a5!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1698821293499!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>

             {/* Founder Section */}
<div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
    {/* Left Section: Founder Image */}
    <div data-aos="zoom-out-up" className="overflow-hidden">
        <p className="text-4xl font-bold text-blue-600 text-center mb-5">Chairman</p>
        <img className="h-full w-full rounded-lg shadow-2xl" src={teamImage} alt="founder" />
    </div>

    {/* Right Section: Founder Name and Description */}
    <div className="text-gray-800 font-mono mt-8">
        <p className="text-3xl font-bold text-center text-blue-600">Manish Khadka</p> {/* Displaying the founder's name */}
        <p className="text-lg leading-relaxed mt-4">
            Our founder is an industry leader with years of experience, building a company centered on innovation, excellence, and integrity. We value collaboration and pushing boundaries in every project we take on.
        </p>
    </div>
</div>


                {/* Team Section */}
                <div className="my-12">
                    <h2 className="text-3xl font-bold text-blue-600 text-center mb-10">Leadership Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {data.map((member) => (
                            <div key={member.id} className="text-center" data-aos="flip-left">
                                <div className="relative h-64 w-auto rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer">
                                    <img className="h-full w-full object-cover" src={member.image} alt={member.name} />
                                    <div className="absolute inset-0 flex items-end justify-end p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                        <a href="https://www.linkedin.com/" className="text-white hover:text-blue-400">
                                            <FaLinkedin size={30} />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                                <p className="text-gray-600">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import vectorBg from '../assets/image.png';
import { FaCode, FaDesktop, FaProjectDiagram, FaShieldAlt, FaCloud, FaUserAlt, FaRegLifeRing } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md'; // Ensure MdUpdate is imported

const Ourwork = () => {
    const services = [
        { name: 'Project Creation', icon: <FaCode size={40} />, description: 'Designing, developing, and maintaining websites and web applications, including front-end and back-end development.' },
        { name: 'Software Development', icon: <FaDesktop size={40} />, description: 'Creating, designing, and developing software applications, whether for desktop, web, or mobile platforms and more.' },
        { name: 'Project Management', icon: <FaProjectDiagram size={40} />, description: 'Overseeing the planning, execution, and delivery of technology projects to ensure they are completed on time and within budget.' },
        { name: 'Project Implementation', icon: <FaShieldAlt size={40} />, description: 'Designing, implementing, and maintaining network systems, including hardware, software, and protocols.' },
        { name: 'Software Update', icon: <MdUpdate size={40} />, description: 'Designing, developing, and maintaining websites and web applications, and updating them periodically.' },
        { name: 'Cyber Security', icon: <FaShieldAlt size={40} />, description: 'Protecting digital systems, networks, and data from cyber threats and ensuring the security and privacy of sensitive information.' },
        { name: 'Cloud Computing', icon: <FaCloud size={40} />, description: 'Offering cloud-based solutions for storage, computing, and application deployment using platforms like AWS, Microsoft Azure, and Google Cloud.' },
        { name: 'UI/UX Design', icon: <FaUserAlt size={40} />, description: 'Creating user-friendly and visually appealing interfaces for websites and applications to enhance user experience.' },
        { name: '24/7 Support', icon: <FaRegLifeRing size={40} />, description: 'Providing expert advice and guidance on technology strategies, infrastructure setup, and best practices for businesses.' },
        { name: 'Digital Marketing', icon: <FaRegLifeRing size={40} />, description: 'Promoting products and services using digital channels such as SEO, social media, and email marketing to increase brand visibility and sales.' },
        { name: 'Mobile App Development', icon: <FaCode size={40} />, description: 'Developing mobile applications for iOS and Android platforms to help businesses reach their customers effectively on mobile devices.' },
        { name: 'IT Consultancy', icon: <FaDesktop size={40} />, description: 'Providing expert advice on technology solutions, helping businesses optimize their IT infrastructure and strategy for better performance and scalability.' }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative lg:h-[80vh] md:h-[70vh] h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: `url('https://img.freepik.com/free-vector/bright-waves-background_1053-271.jpg?t=st=1731598039~exp=1731601639~hmac=fcfd431f1520727ccfb1653df5d0ae609b44359326274c14ced61554e979e17a&w=826')` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-80"></div>
                <div className="relative text-center flex flex-col justify-center items-center font-sans text-white h-full px-5 md:px-20">
                    <img src={vectorBg} alt="decorative vector" 
                        className="absolute left-10 bottom-5 w-48 md:w-64 lg:w-80 xl:w-96 opacity-60 lg:opacity-80" 
                    />
                    <h1 className="font-extrabold text-4xl lg:text-6xl tracking-wide text-shadow-lg">Our Services</h1>
                    <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        We are your trusted innovation partner, dedicated to driving progress and growth in every project.
                    </p>
                </div>
            </div>

            {/* Services Cards Section */}
            <div className="mx-7 md:mx-10 lg:mx-28 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-center mb-4">
                <div className="bg-[#6CBC41] p-4 rounded-full text-white">
                    {service.icon}
                </div>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">{service.name}</h2>
            <p
                className="text-gray-700 text-sm text-center leading-relaxed"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
            >
                {service.description}
            </p>
        </div>
    ))}
</div>


       
        </div>
    );
}

export default Ourwork;

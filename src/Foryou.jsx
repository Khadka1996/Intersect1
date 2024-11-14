import React from 'react'
import { MdSupportAgent } from "react-icons/md";
const Foryou = () => {
    const cardData = [
        {
          "title": "Invoicing",
          "description": "Make digital exchanges as simple as paper exchange with the same level of security, traceability and probative value"
        },
        {
          "title": "Security",
          "description": "We ensure the highest level of data protection and security for all your transactions."
        },
        {
          "title": "Timeliness",
          "description": "Timely invoicing with automated alerts ensures you never miss deadlines."
        },
        {
          "title": "Multi-Platform",
          "description": "Accessible across multiple platforms including mobile, desktop, and web."
        },
        {
          "title": "User-Friendly",
          "description": "Our platform is designed for ease of use, ensuring a smooth user experience for everyone."
        },
        {
          "title": "24/7 Support",
          "description": "Our dedicated support team is available around the clock to assist you with any inquiries."
        }
      ];
      
 
  return (
    <div className='mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8'>
        <div className='flex flex-col gap-2 md:gap-4'>
            <div><h1 className='font-bold md:text-xl text-lg lg:text-2xl shadow-black'>What Can We Do For You?</h1></div>
            <div><p>Bajra excels at delivering innovative technological solutions for all types of technology needs across various domains. Regardless of the complexity of your ideas or solutions, we meticulously analyze every potential path and select the best course of action to craft the optimal version of your dream project within required constraints. We don't hesitate to push the limits using the latest technologies or explore the bleeding edge and we are also very good at keeping things stable and working within specified processes or existing technology stacks. Here are some of the major categories of services we provide for our beloved partners</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
        <div
          key={index}
          className='bg-[#70BF44] p-6 rounded-md text-black flex flex-col gap-3'
        >
          <MdSupportAgent /> {/* Displaying the icon here */}
          <h1 className='font-bold text-lg'>{card.title}</h1>
          <p className='text-white'>{card.description}</p>
        </div>
      ))}
            </div>
        </div>
    </div>
  )
}

export default Foryou
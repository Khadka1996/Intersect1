import React from 'react'

const Wedo = () => {
    const data = [
        {
          title: "Invoice",
          imgSrc: "https://cdn-icons-png.flaticon.com/512/4306/4306889.png",
          description: "Our invoice system streamlines billing, ensuring timely payments and clear communication for smooth financial transactions."
        },
        {
          title: "Support",
          imgSrc: "https://cdn-icons-png.flaticon.com/512/4306/4306905.png", // Replace with actual support icon URL
          description: "We provide dedicated support to address your queries and resolve issues promptly, ensuring uninterrupted service."
        },
        {
          title: "Surveying",
          imgSrc: "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-office-checklist-icon-business-checklist-survey-test-icon-png-image_2047566.jpg", // Replace with actual surveying icon URL
          description: "Our surveying services deliver accurate measurements and insights, aiding in informed decision-making for your projects."
        },
        {
          title: "Consulting",
          imgSrc: "https://cdn-icons-png.flaticon.com/512/4306/4306930.png", // Replace with actual consulting icon URL
          description: "Our consulting team offers expert advice and strategic insights to help you navigate challenges and seize opportunities."
        }
      ];
  return (
    <div className='mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8'>
        <div className='flex flex-col'>
            <h1 className='text-black font-bold text-lg md:text-xl lg:text-2xl text-center mb-3'>what Can We Do For You ?</h1>
            <p data-aos="zoom-in-up" data-aos-duration="1200">At our software development company, we provide a comprehensive suite of services designed to elevate your business. Our expertise spans custom software solutions, mobile app development, and web design, all tailored to meet your unique requirements. We prioritize understanding your specific needs and objectives, ensuring seamless communication throughout the entire development process. With a dedicated team of skilled professionals, we emphasize quality and innovation, delivering products that enhance efficiency and drive growth. Our commitment doesn’t end at delivery; we offer ongoing support and maintenance to ensure your software continues to perform optimally, empowering your business for lasting success.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7 my-2'>
            {data.map((item, index) => (
            <div key={index} className='bg-green-100 p-4  md:p-10' data-aos="flip-right" data-aos-duration="1200">
                <div className='overflow-hidden md:h-16 md:w-16 h-12 w-12'>
                    <img className='h-full w-full object-cover'src={item.imgSrc} alt={item.title}  />
                </div>
                <h1 className='font-bold text-lg my-1'>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            ))}
            </div>
        </div>

    </div>
  )
}

export default Wedo
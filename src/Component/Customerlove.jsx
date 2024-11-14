import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; // Import arrow icons from react-icons

// Sample review data
const reviews = [
    {
      text: "This software has revolutionized our workflow! The intuitive interface and powerful features have made our tasks significantly easier. Highly recommended for anyone looking to boost their productivity.",
      reviewer: "Alice Johnson",
      image: "https://cdn.pixabay.com/photo/2023/02/17/16/25/man-7796384_640.jpg", // Replace with actual image URLs
      rating: 5
    },
    {
      text: "A fantastic product that has exceeded our expectations. The customer support is phenomenal, and the updates keep getting better. We couldn't be happier with our decision to use this software.",
      reviewer: "Bob Smith",
      image: "https://i.pinimg.com/236x/34/85/94/3485941c0634be887eca300b89bf48b1.jpg", // Replace with actual image URLs
      rating: 4
    },
    {
      text: "Easy to use and very effective. The features are well thought out, and the support team is always available to help with any questions. A great investment for any business!",
      reviewer: "Charlie Brown",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCbyvYEn9JgTzhjYUv_p3Oqz4pygadNuTlLIZrG6uc7DBVzy5R1folUbTIXjeY2BT7OM&usqp=CAU", // Replace with actual image URLs
      rating: 5
    },
    {
      text: "This is the best software I've ever used for project management. It helps keep everything organized and on track. The integration with other tools is seamless and efficient.",
      reviewer: "Diana Prince",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVn6sCh-sjxeL11vXC6l-1HmugqN1xaas1cwuWffvWLNFp5IxOTzIjCTcITVaSQNAEXQ&usqp=CAU", // Replace with actual image URLs
      rating: 4
    },
    {
      text: "The user interface is intuitive and the features are powerful. I love the flexibility and customization options that allow me to tailor the software to my needs.",
      reviewer: "Ethan Hunt",
      image: "https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg", // Replace with actual image URLs
      rating: 5
    },
  ];
  

const Customerlove = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next review
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to handle previous review
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className='mx-7 md:mx-10 lg:mx-28 my-3'>
        <div className='flex flex-col gap-2 md:gap-4 justify-center items-center text-center mb-8'>
            <h1 className='text-gray-600 font-semibold text-lg md:text-xl lg:text-2xl'>Why cutomers love
            </h1>
            <h1 className='text-black font-bold text-lg md:text-xl lg:text-2xl'>working with </h1>
        </div>
        <div className='flex flex-row justify-between items-center gap-4 md:gap-6 lg:gap-10'>
            <button 
          onClick={handlePrev} 
          className="bg-[#70BF44] text-white p-2 rounded-l flex items-center justify-center"
        >
          <MdArrowBack />
        </button>
            <p>{reviews[currentIndex].text}</p>
            <button 
          onClick={handleNext} 
          className="bg-[#70BF44] text-white p-2 rounded-r flex items-center justify-center"
        >
          <MdArrowForward />
        </button>
            </div>
     <div className='flex flex-row flex-wrap justify-center items-center pt-10'>

            {reviews.map((review, index) => (
                <div key={index} className={`p-2 transition-opacity duration-300 ${index === currentIndex ? 'font-bold text-blue-600' : 'text-gray-600 opacity-50'}`}>
                <div className='flex flex-col gap-3'>
                    <div className='rounded-full overflow-hidden md:h-24 md:w-24 h-12 w-12 lg:h-32 lg:w-32'>
                        <img className='object-cover h-full w-full' src={review.image} alt={review.reviewer} />
                    </div>
                    <div className="mb-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < reviews[currentIndex].rating ? 'text-yellow-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
                    <div>
                      <p>

                {review.reviewer}
                      </p>
                    </div>
                    <div>

                    </div>
                </div>
              </div>
            ))}
            </div>
    </div>
  );
};

export default Customerlove;

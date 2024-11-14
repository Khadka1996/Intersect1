import React, { useState, useEffect } from 'react';

const StatCard = ({ title, targetValue, incrementStep, incrementSpeed }) => {
  const [count, setCount] = useState(0); // Initial count set to 0

  useEffect(() => {
    let startValue = 0;

    const timer = setInterval(() => {
      startValue += incrementStep; // Increment by the static step
      setCount(Math.min(startValue, targetValue)); // Ensure it doesn’t exceed the target

      if (startValue >= targetValue) {
        clearInterval(timer); // Stop the timer once the target is reached
      }
    }, incrementSpeed);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetValue, incrementStep, incrementSpeed]);

  return (
    <div className='flex flex-col justify-between items-center bg-[#1C3483] text-white rounded-lg p-8'>
      <p>{title}</p>
      <h1 className='font-bold text-2xl'>{count}+</h1> {/* Dynamically update count */}
    </div>
  );
};

const Trust = () => {
  return (
    <div className='mx-7 md:mx-10 lg:mx-28 my-3 pt-5 md:pt-10'>
      <div className='flex flex-col md:gap-5 gap-2 lg:gap-6'>
        <h1 className='font-bold md:text-xl text-lg lg:text-2xl shadow-black text-center'>Trusted by 150+ enterprises scale-ups and startups</h1>
        <p  data-aos="zoom-in" data-aos-duration="1300">At Intersect, we have had the privilege of partnering with some of the most innovative and forward-thinking companies in the tech industry. From big companies to startups that hope to be big one day, they trust us with the expertise and support they need to bring their ideas to life</p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'  data-aos="zoom-in-up" data-aos-duration="1200">
          {/* Members */}
          <StatCard title="Members" targetValue={120} incrementStep={10} incrementSpeed={30} />

          {/* Country */}
          <StatCard title="Country" targetValue={2} incrementStep={1} incrementSpeed={50} />

          {/* Years */}
          <StatCard title="Years" targetValue={3} incrementStep={1} incrementSpeed={100} />

          {/* Commitment */}
          <StatCard title="Commitment" targetValue={10} incrementStep={5} incrementSpeed={40} />
        </div>
      </div>
    </div>
  );
};

export default Trust;

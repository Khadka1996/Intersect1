import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { RiHandbagFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from 'react-router-dom';
import vectorBg from '../assets/image.png';

const Career = () => {
  const data = [
    { "id": 1, "jobTitle": "Frontend Engineer", "vacancies": 4 },
    { "id": 2, "jobTitle": "Backend Developer", "vacancies": 2 },
    { "id": 3, "jobTitle": "UI/UX Designer", "vacancies": 3 },
    { "id": 4, "jobTitle": "Project Manager", "vacancies": 1 },
    { "id": 5, "jobTitle": "DevOps Engineer", "vacancies": 3 },
    { "id": 6, "jobTitle": "Quality Assurance Engineer", "vacancies": 5 },
    { "id": 7, "jobTitle": "Data Scientist", "vacancies": 2 },
    { "id": 8, "jobTitle": "Product Manager", "vacancies": 1 },
    { "id": 9, "jobTitle": "Business Analyst", "vacancies": 4 },
    { "id": 10, "jobTitle": "Scrum Master", "vacancies": 2 },
    { "id": 11, "jobTitle": "Technical Writer", "vacancies": 1 },
    { "id": 12, "jobTitle": "Full Stack Developer", "vacancies": 3 }
  ];

  return (
    <div>
      <div className="relative lg:h-[80vh] md:h-[70vh] h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url('https://img.freepik.com/free-vector/bright-waves-background_1053-271.jpg?t=st=1731598039~exp=1731601639~hmac=fcfd431f1520727ccfb1653df5d0ae609b44359326274c14ced61554e979e17a&w=826')` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 opacity-80"></div>
        <div className="relative text-center flex flex-col justify-center items-center font-sans text-white h-full px-5 md:px-20">
          <img src={vectorBg} alt="decorative vector"
            className="absolute left-10 bottom-5 w-48 md:w-64 lg:w-80 xl:w-96 opacity-60 lg:opacity-80"
          />
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-wide text-shadow-lg">Let Us Be Your</h1>
          <h1 className="text-[#70BF44] font-bold text-4xl sm:text-5xl mt-2">Innovation Partner!</h1>
        </div>
      </div>

      <div className='mx-4 md:mx-12 lg:mx-24 my-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            data.map((d) => (
              <Link to={`/career/${d.id}`} key={d.id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="group h-auto w-full bg-gradient-to-r from-[#70BF44] to-[#4A9F27] rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="p-6 flex items-center justify-between">
                    <RiHandbagFill className="text-4xl text-white" />
                    <div className="text-white">
                      <h1 className="text-2xl font-semibold">{d.jobTitle}</h1>
                      <p className="font-medium opacity-90">{d.vacancies} positions available</p>
                    </div>
                    <FaGreaterThan className="text-2xl text-white group-hover:translate-x-4 transition-transform duration-300 ease-out" />
                  </div>

                  <div className="bg-[#003366] text-center p-4 rounded-b-xl">
                    <button className="bg-[#70BF44] text-white text-lg font-semibold py-2 px-8 rounded-full transition-transform transform hover:scale-110">
                      Apply Now
                    </button>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Career;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5, // Show 5 slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (1024px and below)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For small screens (768px and below)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="mx-7 md:mx-10 lg:mx-28 py-4 md:py-6 lg:py-8">
      <h1 className="text-center font-bold text-2xl mb-10 pt-3 text-black">
        Our Lovely Clients are
      </h1>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1645769056.png"
              alt="Client 1"
            />
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1647245369.png"
              alt="Client 2"
            />
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1647245646.png"
              alt="Client 3"
            />
          </div>
        </div>
        {/* Slide 4 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1647246155.png"
              alt="Client 4"
            />
          </div>
        </div>
        {/* Slide 5 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1647246276.png"
              alt="Client 5"
            />
          </div>
        </div>
        {/* Slide 6 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1645768981.png"
              alt="Client 6"
            />
          </div>
        </div>
        {/* Slide 7 */}
        <div>
          <div className="overflow-hidden p-3 mx-5 h-32 bg-gray-100 shadow-md shadow-gray-600 flex justify-center items-center rounded-xl">
            <img
              className="h-full w-auto object-cover"
              src="https://prabidhienterprises.com/images/clients/1647245164.png"
              alt="Client 7"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Clients;

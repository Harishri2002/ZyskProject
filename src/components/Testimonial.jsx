import React from "react";
import image from '../assets/profile.png';
import image2 from '../assets/sis.png';

const Testimonial = () => {
  return (
    <div className="text-center mb-16 flex flex-col items-center">
         <img
          src={image2} // Update this path to the actual image location
          alt="Candice Wu"
          className="w-19 justify-center h-10 rounded-full mb-4"
        />
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 px-20 text-gray-900">
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
      </h1>
      <div className="flex flex-col items-center">
        <img
          src={image} // Update this path to the actual image location
          alt="Candice Wu"
          className="w-16 h-16 rounded-full mb-4"
        />
        <p className="text-lg font-medium text-gray-700">Candice Wu</p>
        <p className="text-gray-500">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
import React from "react";
import image from '../assets/hero.png';
const Hero = () => {
    return (
      <section className="text-center px-6 py-12 bg-white">
        <span className="text-red-500 font-semibold">New feature</span>
        <h1 className="text-3xl md:text-5xl font-bold mt-2 text-black">Beautiful analytics to grow smarter</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        </p>
        <div className="mt-6 space-x-4">
          <button className="border px-6 py-2 text-black rounded-full">Demo</button>
          <button className="bg-red-500 text-black px-6 py-2 rounded-full">Sign up</button>
        </div>
        <div className="mt-10">
        <img src={image} alt="Hero Section Image" className="w-full max-w-7xl mx-auto" />
      </div>
      </section>
    );
  };

export default Hero;
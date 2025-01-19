import React from "react";
import image from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="text-center px-6 py-12 bg-white py-20">
      <span className="text-red-500 border-2 border-red-200 w-auto rounded-full px-2 p-1">
      <span className="text-red-500 font-semibold border-2 border-red-200 rounded-full px-1">New feature</span>
      &nbsp; Check out the team dashboard ➔
      </span>
     
      <h1 className="text-3xl md:text-5xl font-bold mt-2 text-black">
        Beautiful analytics to grow smarter
      </h1>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="mt-6 space-x-4">
        <button className="border px-6 py-2 text-black rounded-full">
          <img
            src="https://img.icons8.com/?size=100&id=bqOL9fT7XSdo&format=png&color=000000"
            width="23"
            height="23"
            alt=""
            className="inline"
          />
          <span className="inline ml-1">Demo</span>
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full">
          Sign up
        </button>
      </div>
      <div className="mt-20">
        <img
          src={image}
          alt="Hero Section Image"
          className="w-full max-w-7xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;

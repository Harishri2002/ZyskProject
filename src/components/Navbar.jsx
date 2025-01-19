import React, { useState } from "react";
import zyskLogo from "../assets/zysk.png"; // Update with actual image path
import profilePic from "../assets/profile.png"; // Update with actual profile image path
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white relative px-20">
      <div className="flex items-center space-x-2">
        <img src={zyskLogo} alt="Zysk Logo" className="h-8" />
        <ul className="hidden md:flex space-x-6 text-gray-700 px-10">
          <li>
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="hover:text-gray-900">
              Products
            </a>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <a href="#" className="hover:text-gray-900">
              Resources
            </a>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt="Profile"
          className="h-8 w-8 rounded-full hidden md:block"
        />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="https://img.icons8.com/?size=100&id=tIGF40qilLXA&format=png&color=000000"
            alt="Icon"
            width="40"
            height="40"
          />
        </button>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden text-gray-700">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

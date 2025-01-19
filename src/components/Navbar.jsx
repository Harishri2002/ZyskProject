import React, { useState } from "react";
import zyskLogo from "../assets/Zysk.png"; // Update with actual image path
import profilePic from "../assets/profile.png"; // Update with actual profile image path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="flex items-center justify-between p-4 shadow-md bg-white relative">
        <div className="flex items-center space-x-2">
          <img src={zyskLogo} alt="Zysk Logo" className="h-8" />
          <ul className="hidden md:flex space-x-6 text-gray-700 ml-4 ">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <img src={profilePic} alt="Profile" className="h-8 w-8 rounded-full hidden md:block" />
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-4 space-y-4 md:hidden text-gray-700">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        )}
      </nav>
    );
  };


export default Navbar;
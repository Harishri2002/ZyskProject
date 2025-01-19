import React from 'react';
import zyskLogo from "../assets/Zysk.png";
const Footer = () => {
    return (
      <footer className="bg-white py-8 border-t ">
        <div className="border p-10 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div>
            <h4 className="font-bold text-gray-800">Product</h4>
            <ul>
              {[
                "Overview",
                "Features",
                "Solutions",
                "Pricing",
                "Releases",
              ].map((item, index) => (
                <li key={index} className="text-gray-600 mt-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div >
            <h4 className="font-bold text-gray-800">Company</h4>
            <ul>
              {["About us", "Careers", "Press", "News", "Contact"].map(
                (item, index) => (
                  <li key={index} className="text-gray-600 mt-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Resources</h4>
            <ul>
              {["Blog", "Newsletter", "Events", "Help centre"].map(
                (item, index) => (
                  <li key={index} className="text-gray-600 mt-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Use cases</h4>
            <ul>
              {["Blog", "Newsletter", "Events", "Help centre"].map(
                (item, index) => (
                  <li key={index} className="text-gray-600 mt-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Socials</h4>
            <ul>
              {["Blog", "Newsletter", "Events", "Help centre"].map(
                (item, index) => (
                  <li key={index} className="text-gray-600 mt-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800">Legal</h4>
            <ul>
              {["Terms", "Privacy", "Cookies", "Licenses"].map(
                (item, index) => (
                  <li key={index} className="text-gray-600 mt-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between px-10 p-7">
        <img src={zyskLogo} alt="Zysk Logo" className="h-10" />
        <p className="text-center text-gray-500 mt-3">© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
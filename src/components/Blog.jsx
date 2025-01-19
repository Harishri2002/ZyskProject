import React from "react";
import "tailwindcss/tailwind.css";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import profilePic from "../assets/profile.png";
// Blog Component update
const Blog = () => {
  return (
    <section className=" p-20 border bg-white">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Our blog
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Lastest blog posts
            </h3>
            <p className="text-gray-600 mb-8">
              Tool and strategies modern teams need to help their companies
              grow.
            </p>
          </div>

          {/* On larger screens, keep the button aligned right, but on mobile, it'll be at the bottom */}
          <button className="bg-red-500 h-10 w-29 px-3 text-white rounded-lg font-medium hover:bg-red-600 hidden sm:block md:ml-auto">
            View all posts
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "UX review presentations",
              category: "Design",
              desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
              author: "Olivia Rhye",
              date: "20 Jan 2024",
              img: image1,
            },
            {
              title: "Migrating to Linear 101",
              category: "Product",
              desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
              author: "Phoenix Baker",
              date: "19 Jan 2024",
              img: image2,
            },
            {
              title: "Building your API stack",
              category: "Software Engineering",
              desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
              author: "Lana Steiner",
              date: "18 Jan 2024",
              img: image3,
            },
          ].map((post, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>
                <h4 className="text-lg font-semibold text-gray-900 mt-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{post.desc}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="text-sm text-gray-500 flex flex-col ml-5">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button at the bottom on mobile */}
        <div className="sm:hidden flex justify-center mt-8">
          <button className="bg-red-500 h-10 w-full px-3 text-white rounded-lg font-medium hover:bg-red-600">
            View all posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

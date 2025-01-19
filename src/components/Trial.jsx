import React from 'react';
// Trial Component
const Trial = () => {
    return (
      <section className="bg-gray-100 py-12 ">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start your free trial</h3>
          <p className="text-gray-600 mb-6">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium mr-4 hover:bg-gray-300">
              Learn more
            </button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
              Get started
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default Trial;
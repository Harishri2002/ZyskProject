import React, { useState } from 'react';
import image from '../assets/grp.png'
const FAQ = () => {

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time through your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel anytime without any additional charges.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional details to your invoices in your account settings.",
  },
  {
    question: "How does billing work?",
    answer: "Billing is processed automatically every month. You’ll receive a detailed invoice via email.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your account email in your account settings page.",
  },
];

  return (
    <div className="max-w-4xl mx-auto bg-white">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Frequently asked questions</h2>
      <p className="text-center text-gray-600 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4 bg-white">
        {faqData.map((faq, index) => (
          <details
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm cursor-pointer">
            <summary className="font-medium text-gray-800 flex justify-between items-center">
              {faq.question}
              <span className="text-xl text-gray-400">+</span>
            </summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-16 text-center bg-slate-100 rounded-lg p-10">
      <img
          src={image} // Update this path to the actual help icon location
          alt="Help Icon"
          className="w-15 h-12 mx-auto mb-4"
        />
         <p className="text-black text-2xl  mb-4">
         Still have questions? 
        </p>
        <p className="text-700 text-gray-500 mb-4">
         Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button
          className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default FAQ;
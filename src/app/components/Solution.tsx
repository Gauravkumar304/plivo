"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUsers, faTerminal } from '@fortawesome/free-solid-svg-icons'; // Use 'faSackDollar' instead of 'faSackdollar'


const Solution = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
          Unlock the Potential of WhatsApp with Plivo’s Solutions
        </h1>
       
      </div>

      {/* Solutions Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* WhatsApp Business API */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Placeholder for WhatsApp Business API Icon */}
            <FontAwesomeIcon icon={faTerminal} className='h-12 w-12 text-green-600' />
          </div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">WhatsApp Business API</h3>
          <p className="text-gray-600 mb-4">
            Leverage Plivo’s <span className="font-semibold">WhatsApp Business API</span> to programmatically send WhatsApp messages to your customers.
          </p>
          <a href="#" className="text-green-600 font-sans text-lg">
            Documentation →
          </a>
        </div>

        {/* WhatsApp AI Chatbot */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Placeholder for WhatsApp AI Chatbot Icon */}
            <FontAwesomeIcon icon={faUsers} className='h-12 w-12 text-green-600' />
          </div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">WhatsApp AI Chatbot</h3>
          <p className="text-gray-600 mb-4">
            Use Plivo’s no-code, <span className="font-semibold">WhatsApp AI chatbot</span>, powered by ChatGPT, to automate your customer service.
          </p>
          <a href="#" className="text-green-600 font-sans text-lg">
            Learn more →
          </a>
        </div>

        {/* WhatsApp Marketing Automation */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            {/* Placeholder for WhatsApp Marketing Automation Icon */}
            <FontAwesomeIcon icon={faBullhorn} className='h-12 w-12 text-green-600' />
          </div>
          <h3 className="text-lg font-semibold text-blue-900 mb-4">WhatsApp Marketing Automation</h3>
          <p className="text-gray-600 mb-4">
            Explore Plivo’s <span className="font-semibold">WhatsApp Marketing Automation</span> platform for personalized campaigns on WhatsApp.
          </p>
          <span className="text-green-600  font-sans text-lg">
            Coming soon →
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700">
          REQUEST TRIAL
        </button>
      </div>
    </div>
  );
};

export default Solution;

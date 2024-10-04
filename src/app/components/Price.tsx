"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'; // Use 'faSackDollar' instead of 'faSackdollar'



const Price = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white">
      {/* Header Section */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6 mt-20">
        WhatsApp Business API Pricing
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Streamlined Pricing: <span className="text-green-600">Meta&apos;s Fee</span> + One Simple Plivo Fee.
      </p>

      {/* Main Content */}
      <div className=" rounded-lg p-6 md:p-12 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-900 mb-6">
          Lower your total costs significantly with Plivo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Meta Fee Section */}
          <div className="flex flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-4 rounded-full mr-4">
            <FontAwesomeIcon icon={faHandHoldingDollar } className='h-12 w-12  text-green-600'/>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Meta Fee</h3>
              <p className="text-left text-gray-600">
                Meta charges a fee* per conversation at rates that depend on the type of conversation.
              </p>
            </div>
          </div>

          {/* Plivo Platform Fees Section */}
          <div className="flex flex-row items-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-100 p-4 rounded-full mr-4">
            <FontAwesomeIcon icon={faSackDollar} className="h-12 w-12 text-green-600" />
              
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Plivo platform fees</h3>
              <p className="text-left text-gray-600">
               <span className='text-blue-900 text-xl font-semibold'>$0.00080/</span> conversation* <br />
                Pay per conversation, not per message.
              </p>
            </div>
          </div>
          <div className=" text-left text-gray-500 text-sm">
          <p>
            *Visit <a href="#" className="text-green-600 underline">Meta&apos;s website</a> for details.
          </p>
        </div>
        <div className=" text-left text-gray-500 text-sm">
          <p>
          *One fee for any conversation, anywhere, with no extra charge for media messages.
          </p>
        </div>

        </div>

        {/* Footer Note */}
       
      </div>

      {/* Footer Section */}
      <p className="mt-8 text-center">Our volume-based discounts offer significant savings</p>
      <div className="mt-4">
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700">
          GET VOLUME PRICING
        </button>
      </div>
    </div>
  );
};

export default Price;

"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faSackDollar, faAward, faHeadset} from '@fortawesome/free-solid-svg-icons'; // Use 'faSackDollar' instead of 'faSackdollar'


const Support = () => {
  return (
    <div className="flex flex-col items-center px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
          Plivo is a Trusted Partner for Superior Support, Guaranteed Delivery, and Simple Pricing
        </h1>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {/* Superior Support */}
        <div className="flex flex-row items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mr-4">
            {/* Placeholder for Superior Support Icon */}
            <FontAwesomeIcon icon={faHeadset} className='h-12 w-12 text-green-600' />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Superior Support</h3>
            <p className="text-gray-600 text-lg mb-4">
              Plivo has a 99/100 satisfaction score on G2, with 24/7 customer support and guided onboarding facility.
            </p>
          </div>
        </div>

        {/* Trusted Partner */}
        <div className="flex flex-row items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mr-4">
            {/* Placeholder for Trusted Partner Icon */}
            <FontAwesomeIcon icon={faHandshake} className='h-12 w-12 text-green-600' />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Trusted Partner</h3>
            <p className="text-gray-600 text-lg mb-4">
              Plivo is a registered Meta Solution Provider for WhatsApp business integration.
            </p>
          </div>
        </div>

        {/* Guaranteed Delivery */}
        <div className="flex flex-row items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mr-4">
            {/* Placeholder for Guaranteed Delivery Icon */}
            <FontAwesomeIcon icon={faAward} className='h-12 w-12 text-green-600' />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Guaranteed Delivery</h3>
            <p className="text-gray-600 text-lg mb-4">
              Plivo delivers billions of messages and calls annually with SMS and voice fallback channels.
            </p>
          </div>
        </div>

        {/* Simple Pricing */}
        <div className="flex flex-row items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mr-4">
            {/* Placeholder for Simple Pricing Icon */}
            <FontAwesomeIcon icon={faSackDollar} className="h-12 w-12 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Simple Pricing</h3>
            <p className="text-gray-600 text-lg mb-4">
              Plivo charges a flat fee per conversation, with volume discounts available.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <a href="#" className="text-green-600 font-semibold">
          View Documentation →
        </a>
      </div>
    </div>
  );
};

export default Support;

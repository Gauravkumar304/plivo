"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppImage from '../assets/Hero.png'; // adjust path accordingly




const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Navbar Links for Overview and Pricing */}
      <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-end space-x-8">
        <Link href="/" className="text-blue-900 hover:underline  hover:font-bold">
          Overview
        </Link>
        <Link href="https://whatsbot-fbn5.vercel.app/" className="text-blue-900 hover:underline   hover:font-bold" target="_blank">
          Pricing
        </Link>
      </div>

      {/* Container for the hero section with padding */}
      <div className="container px-4 py-12 space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        
        {/* Left side - Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            WhatsApp Business API
          </h1>
          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-6">
            Effortlessly deploy WhatsApp for customer engagement while keeping costs low.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {/* Request Trial Button */}
            <button className="border border-blue-900 text-blue-900 px-6 py-2 font-semibold rounded hover:bg-blue-50">
              REQUEST TRIAL
            </button>
            {/* Get Volume Pricing Button */}
            <button className="bg-blue-900 text-white px-6 py-2 font-semibold rounded hover:bg-blue-800">
              GET VOLUME PRICING
            </button>
          </div>
        </div>

        {/* Right side - Image Section */}
        <div className="md:w-1/2 flex text-right md:justify-end py-10 md:py-20">
          {/* Image with responsive sizing */}
          <Image
            src={WhatsAppImage}
            alt="WhatsApp Business API"
            className="w-full h-auto max-w-xs md:max-w-md"
          />
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="py-6 mx-auto flex justify-center items-center max-w-6xl">
        {/* Logos Wrapper */}
        <div className="container mx-auto flex justify-center items-center space-x-8 md:space-x-16">
          {/* Only display 3 logos on mobile and all on larger screens */}
          <span className="text-gray-500 text-3xl ">ATLASIAN</span>
          <span className="text-gray-500 text-3xl">Uber</span>
          <span className="text-gray-500 text-3xl">Zomato</span>
          <span className="text-gray-500 text-3xl hidden md:inline">GoDaddy</span>
          <span className="text-gray-500 text-3xl hidden md:inline">Razorpay</span>
        </div>
      </div>

      <p className="text-green-600 text-center mx-auto py-4 max-w-6xl">
        Learn how thousands of innovative businesses rely on Plivo for their customer engagement →
      </p>
    </section>
  );

};

export default Hero;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className='sticky top-0 bg-white'>
      {/* Upper Navbar */}
      <div className= "mr-32 py-2 hidden md:flex justify-end space-x-6 px-8">
        <Link href="/support" className="text-sm text-blue-900 hover:underline">
          Support
        </Link>
        <Link href="/login" className="text-sm text-blue-900 hover:underline">
          Log in
        </Link>
      </div>

      {/* Lower Navbar */}
      <nav className="py-2 px-4 md:px-8 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faRobot} className="h-8 text-green-600" />
            <span className="text-2xl font-extrabold text-black">plivo</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Links (Visible on larger screens) */}
          <ul className="hidden md:flex space-x-6 text-sm text-blue-900 font-medium">
            <li>
              <Link href="/products" className="hover:underline hover:text-green-600 text-base">
                Products
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className="hover:underline hover:text-green-600 text-base">
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/developers" className="hover:underline hover:text-green-600 text-base">
                Developers
              </Link>
            </li>
            <li>
              <Link href="/customers" className="hover:underline hover:text-green-600 text-base">
                Customers
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline hover:text-green-600 text-base">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline hover:text-green-600 text-base">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Desktop Right-side Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <button className="border border-blue-900 text-blue-900 px-4 py-2 font-semibold text-xs rounded hover:bg-blue-50">
              REQUEST TRIAL
            </button>
            <button className="bg-blue-900 text-white px-4 py-2 font-semibold text-xs rounded hover:bg-blue-800">
              GET VOLUME PRICING
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible on small screens) */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {/* Mobile Links */}
            <ul className="flex flex-col items-center space-y-4 text-sm text-blue-900 font-medium">
              <li>
                <Link href="/products" className="hover:underline hover:text-green-600 text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:underline hover:text-green-600 text-base">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:underline hover:text-green-600 text-base">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:underline hover:text-green-600 text-base">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline hover:text-green-600 text-base">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline hover:text-green-600 text-base">
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Mobile Right-side Buttons */}
            <div className="flex flex-col items-center space-y-4">
              <button className="border border-blue-900 text-blue-900 px-4 py-2 font-semibold text-xs rounded hover:bg-blue-50 w-full max-w-xs">
                REQUEST TRIAL
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 font-semibold text-xs rounded hover:bg-blue-800 w-full max-w-xs">
                GET VOLUME PRICING
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

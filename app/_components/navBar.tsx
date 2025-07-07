"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('');

  const services = [
    { name: 'Web Development', href: '/Web-development' },
    { name: 'UI/UX Design', href: 'UI&UX' },
    { name: 'Graphic Designing', href: '/Graphics' },
    { name: 'Video Editing', href: '/VideoEditing' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              ServiceCompany
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => handleLinkClick(service.name)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === 'contact' ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
            <Link
              href="/get-quote"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>

            <div className="px-3 py-2">
              <div className="text-base font-medium text-gray-700">Services</div>
              <div className="mt-2 space-y-1 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => handleLinkClick(service.name)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => handleLinkClick('about')}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </Link>
            <Link
              href="/get-quote"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

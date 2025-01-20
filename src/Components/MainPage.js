import React from "react";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoIosPeople, IoIosStar, IoIosPlayCircle } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

import sample2 from "../Asset/pngwing.com (2).png";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-amber-100 via-blue-100 via-white-100 to-blue-200">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 ml-8">
        {/* Google Rating */}
        <a className="flex items-center text-primary font-semibold py-4 transition" href="/">
          <IoIosStar className="mr-2 text-yellow-400 text-xl" />
          Google Rating
          {[...Array(5)].map((_, index) => (
            <MdStars key={index} className="ml-1 text-yellow-400 text-xl" />
          ))}
        </a>

        {/* Title */}
        <h1 className="text-5xl font-semibold mb-4">Your Trusted Partner</h1>
        <h1 className="text-5xl font-semibold mb-4">for Compliance Business Needs</h1>

        {/* Separator */}
        <hr className="w-24 h-1 my-4 bg-red-600 border-0 rounded" />

        {/* Description */}
        <p className="mb-6">
          An online business compliance platform that helps entrepreneurs and other individuals with various <b>registrations</b>, <b>tax filings</b>, and other <b>legal matters</b>.
        </p>

        {/* Stats Buttons */}
        <div className="flex flex-col md:flex-row mb-12 space-y-4 md:space-y-0 md:space-x-4">
          <button className="flex items-center py-2 px-4 rounded-lg">
            <PiSquaresFourLight className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">4.5+</p>
              <p className="text-sm">Customer Rating</p>
            </div>
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg">
            <IoIosPeople className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">20,000+</p>
              <p className="text-sm">Clients</p>
            </div>
          </button>
          <button className="flex items-center py-2 px-4 rounded-lg">
            <FaHandshakeSimple className="text-3xl mr-4 text-primary" />
            <div className="text-left text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-blue-800">
              <p className="text-lg font-bold">99.8%</p>
              <p className="text-sm">Financial Stability</p>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center mt-12">
          <a className="bg-primary font-semibold text-white px-4 py-2 rounded hover:bg-primary-dark transition" href="/">
            See All Services
          </a>
          <a className="flex items-center text-primary font-semibold px-4 py-2 ml-4 transition hover:underline" href="/">
            <IoIosPlayCircle className="mr-2 text-red-600 text-2xl" />
            See How It Works
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 flex justify-center">
        {/* Overlay Image */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         
        </div>
        {/* Main Image */}
        <div className="relative z-10 w-full">
          <img src={sample2} alt="Main" className="w-full h-auto max-w-md object-cover rounded-lg" />
        </div>

        {/* Floating Buttons */}
        <div className="absolute right-0 top-0 flex flex-col space-y-4">
          {["Annual Compliance", "Payroll Services", "Company Formations", "Annual Compliance"].map((text, index) => (
            <button
              key={index}
              className="flex items-center bg-gray-50 text-black py-2 px-4 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
            >
              <span>{text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

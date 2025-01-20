import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Connect = () => {
  return (
    <div className="bg-primary text-center px-4">
      {/* Header Section */}
      <div className="text-white text-sm pt-8 uppercase tracking-widest">
        1% of the industry
      </div>
      <div className="text-white font-bold text-4xl py-2 pb-10">
        Welcome to your new Digital Reality, Now.
      </div>

      {/* Input Section */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          aria-label="Enter your email"
          className="rounded-l-sm px-4 py-2 w-full max-w-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <button
          className="bg-secondary text-white rounded-r-sm px-4 py-2 border shadow-sm hover:bg-secondary-dark transition"
          aria-label="Submit email"
        >
          Submit
        </button>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center items-center w-full gap-6 px-4">
        {/* Feature Items */}
        {[
          "Instant Result",
          "User-friendly Interface",
          "Personalized Interface",
        ].map((feature, index) => (
          <div key={index} className="flex items-center mx-4">
            <div className="rounded-full p-3 flex items-center justify-center text-white bg-secondary mr-2">
              <IoCheckmarkDoneCircle size={24} />
            </div>
            <h2 className="text-sm text-white font-semibold">{feature}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;

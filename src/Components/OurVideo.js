import React from "react";
import sampleImage from "../Asset/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.avif";
import { FaRegLightbulb } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function About() {
  return (
    <div className="bg-primary text-white flex flex-col md:flex-row items-center justify-between w-full p-4 pt-16 pb-8">
      {/* Left Section */}
      <div className="text-left w-full md:w-1/2 px-4 md:px-11">
        <h2 className="text-4xl font-bold pb-4">Our Video Introductions</h2>
        <p className="mt-2 mb-8 text-gray-300">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt apis dui.
        </p>
        
        <ul>
          <li className="flex flex-row mb-8">
            <div className="rounded-full bg-[#ffa229] p-2 mr-4">
              <FaRegLightbulb className="text-5xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Explore ideas together</h3>
              <p className="mt-2 text-gray-300">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </li>

          <li className="flex flex-row mb-8">
            <div className="rounded-full bg-[#ffa229] p-2 mr-4">
              <AiOutlineFundProjectionScreen className="text-5xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Bring those ideas to life</h3>
              <p className="mt-2 text-gray-300">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Section - Image with Play Icon */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 px-4">
        <img
          src={sampleImage}
          alt="Example"
          className="w-full h-auto max-w-xl object-cover rounded-2xl shadow-lg"
        />
        <FaYoutube className="absolute inset-0 m-auto text-8xl text-red-600 opacity-80 hover:opacity-100 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
}

export default About;

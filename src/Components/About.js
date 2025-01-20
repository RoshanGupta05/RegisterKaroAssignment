import React from "react";
import sampleImage from "../Asset/sample1.jpeg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-8 bg-gray-50">
      {/* Text Section */}
      <div className="text-left md:w-1/2">
        <div className="text-secondary text-xs uppercase tracking-wide pb-4">
          Welcome to RegisterKaro.in
        </div>
        <h2 className="text-4xl font-bold pb-4">
          About
          <span className="text-secondary pl-2">Register Karo</span>
        </h2>
        <p className="mt-4 mb-8 leading-relaxed text-gray-700">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years, and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment.
          <br />
          <br />
          Perry is an outstanding leader who is fanatical about customer
          satisfaction. He has built a solid team that has consistently delivered
          on projects, thereby exceeding everyone’s expectations.
          <br />
          <br />
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="flex items-center bg-primary text-white py-3 px-6 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300">
          <span>Learn More</span>
          <FaArrowAltCircleRight className="ml-3 text-lg" />
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex-shrink-0 ml-0 md:ml-8">
        <img
          src={sampleImage}
          alt="About Register Karo"
          className="w-full h-auto rounded-lg shadow-lg border border-amber-600"
        />
      </div>
    </div>
  );
};

export default About;

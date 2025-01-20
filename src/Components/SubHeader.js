import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Fill up Application Form",
      icon: <FaCheckCircle />,
      color: "#eb5757", // Red color
    },
    {
      text: "Make Online Payment",
      icon: <FaTimesCircle />,
      color: "#27ae60", // Green color
    },
    {
      text: "Executive will Process Application",
      icon: <FaInfoCircle />,
      color: "#f2994a", // Orange color
    },
    {
      text: "Get Confirm Mail",
      icon: <FaExclamationCircle />,
      color: "#828282", // Grey color
    },
  ];

  return (
    <div className="flex items-center w-full p-8 bg-secondary justify-around">
      {headings.map((heading, index) => (
        <div key={index} className="flex items-center mx-4">
          {/* Icon Circle */}
          <div
            className="rounded-full p-3 flex items-center justify-center text-white mr-2"
            style={{ backgroundColor: heading.color }}
          >
            {heading.icon}
          </div>
          {/* Heading Text */}
          <h2 className="text-lg font-semibold pl-3">{heading.text}</h2>
        </div>
      ))}
    </div>
  );
}

export default IconHeadings;

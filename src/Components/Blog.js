import React from "react";
import img1 from "../Asset/e7dda523e77516da100b1a88dbaecb3c.jpeg";
import img2 from "../Asset/adefff9c6fad99774e0aa7808b2270ab.jpeg";
import img4 from "../Asset/76ceafadb9f758a56d19a086f7505a80.jpeg";
import img5 from "../Asset/6b913ddf85158d3f3246fba7da982400.jpeg";
import img6 from "../Asset/ab8c0e971321e0daafdbc3bc3adffb48.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blog = [
    {
      image: img1,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & Startup",
      info: "Learn the secrets of transforming a 2-14 team into a 3x Super Bowl winning dynasty.",
      tag1: "Tax & Audit",
      tag2: "Management",
    },
    {
      image: img2,
      who: "Mahesh Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Strategies for taking your company to the next level with expert advice.",
      tag2: "Research",
      tag3: "Tax",
      tag4: "Compliance",
    },
    {
      image: img1,
      who: "Rakhi Verma",
      time: "1 Jan 2023",
      title: "Growing Business Package",
      info: "Practical insights for scaling your growing business effectively.",
      tag1: "Audit",
      tag3: "Money Back",
    },
    {
      image: img4,
      who: "Karan Kumar",
      time: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      info: "Learn how to position your business for rapid growth and success.",
      tag1: "Money",
      tag2: "Management",
    },
    {
      image: img5,
      who: "Prabhash Mishra",
      time: "1 Jan 2023",
      title: "Small Business & Startup",
      info: "Discover key strategies to launch and grow a successful startup.",
      tag2: "News",
      tag3: "Tax & Return",
      tag4: "Audit",
    },
    {
      image: img6,
      who: "Miss Nora",
      time: "1 Jan 2023",
      title: "Small Business & Startup",
      info: "Customer-first strategies for ensuring success in private limited businesses.",
      tag1: "Private Limited",
      tag2: "Customer",
    },
  ];

  return (
    <div className="bg-white items-center text-left mb-8">
      <div className="text-secondary text-sm pt-8 uppercase tracking-widest text-center">
        Explore Our Blogs
      </div>
      <div className="font-bold text-4xl py-2 pb-10 text-center">
        Accelerate Digital Transformation
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((post, index) => (
          <div
            className="bg-white p-5 pb-10 w-full max-w-[352px] mx-auto cursor-pointer shadow-lg rounded-lg"
            key={index}
          >
            <img
              className="mb-8 w-full h-[200px] object-cover rounded-lg"
              src={post.image}
              alt={post.title}
            />
            <div className="flex items-center text-gray-600 gap-2 mb-4">
              <span className="font-semibold">{post.who}</span>
              <span>•</span>
              <span>{post.time}</span>
            </div>
            <div className="text-lg font-semibold mb-4">{post.title}</div>
            <p className="text-gray-600 mb-4">{post.info}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {post.tag1 && (
                <span className="text-green-600 bg-green-200 rounded-full px-3">
                  {post.tag1}
                </span>
              )}
              {post.tag2 && (
                <span className="text-violet-600 bg-violet-200 rounded-full px-3">
                  {post.tag2}
                </span>
              )}
              {post.tag3 && (
                <span className="text-blue-600 bg-blue-200 rounded-full px-3">
                  {post.tag3}
                </span>
              )}
              {post.tag4 && (
                <span className="text-red-600 bg-red-200 rounded-full px-3">
                  {post.tag4}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 mt-8 hover:underline"
        href="/"
      >
        Show more blogs
        <FaArrowRight className="ml-2 text-primary size-3" />
      </a>
    </div>
  );
};

export default Blog;

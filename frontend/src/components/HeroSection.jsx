import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-purple-100 py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
          Empower Yourself with Online Courses That Fit Your Schedule and Goals
        </h1>
        <p className="text-xs sm:text-base md:text-xl mb-12 text-gray-500 max-w-3xl mx-auto">
          Learn from expert instructors, complete real-world projects, and gain skills that will help you succeed.
          Our platform makes learning flexible, interactive, and accessible to everyone.
        </p>

        {/* Search Bar */}
        <form className="flex justify-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for courses..."
            className="w-full px-5 py-3 bg-white rounded-l-xl border border-purple-200 focus:outline-none text-gray-800 shadow-md" />
          <button className="bg-blue-600 shadow-md cursor-pointer hover:bg-blue-700 text-white px-5 rounded-r-xl flex items-center justify-center">
            <FiSearch size={24} />
          </button>
        </form>

        <div className="mt-10">
          <Link to='/' className="px-6 py-2.5 rounded-full bg-blue-900 text-white font-bold text-lg cursor-pointer">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

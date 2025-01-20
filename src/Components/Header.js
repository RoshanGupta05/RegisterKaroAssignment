import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 shadow w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <h2 className="font-bold text-2xl lg:text-3xl text-primary">
          Register<span className="text-secondary">Karo</span>
        </h2>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#services"
          >
            Our Services
          </a>
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#blog"
          >
            Blog
          </a>
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#contact"
          >
            Contact Us
          </a>
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#about"
          >
            About Us
          </a>
          <a
            className="hover:text-secondary transition text-gray-700"
            href="#search"
          >
            <CiSearch className="text-xl" />
          </a>
          <a
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition"
            href="#talk"
          >
            Talk An Expert
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start gap-4 p-4">
            <a
              className="hover:text-secondary transition text-gray-700"
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:text-secondary transition text-gray-700"
              href="#services"
            >
              Our Services
            </a>
            <a
              className="hover:text-secondary transition text-gray-700"
              href="#blog"
            >
              Blog
            </a>
            <a
              className="hover:text-secondary transition text-gray-700"
              href="#contact"
            >
              Contact Us
            </a>
            <a
              className="hover:text-secondary transition text-gray-700"
              href="#about"
            >
              About Us
            </a>
            <a
              className="flex items-center gap-2 hover:text-secondary transition text-gray-700"
              href="#search"
            >
              <CiSearch className="text-xl" />
              Search
            </a>
            <a
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark transition w-full text-center"
              href="#talk"
            >
              Talk An Expert
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  function toggleMenu() {
    setisOpen(!isOpen);
  }
  return (
    <header className=" fixed top-4 left-0 right-0 z-50">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border-2 border-neutral-800">
        {/* -----------left:logo -----------*/}
        <a href="/">
          <img src={logo} alt="logo" width={120} hight={24} />
        </a>

        {/* center:nav links */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-neutral-200">
            Home
          </a>
          <a href="#works" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </nav>

        {/* -----------right:buttons----------- */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <a href="#" className="hover:text-neutral-700 transition">
            Login
          </a>
          <a
            href="#"
            className="flex gap-1 items-center border-2 border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Get Demo{" "}
            <span className="pt-0.5 text-xs">
              <FaLocationArrow />
            </span>
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* -----------hamburger icon for mobile----------- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none text-2xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <IoCloseOutline /> : <HiBars3BottomRight />}
          </button>
        </div>
      </div>

      {/* -----------mobile menu ----------- */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl p-4 mt-2">
          <div class="flex flex-col space-y-4">
            <a href="/" className="hover:text-neutral-200">
              Home
            </a>
            <a href="#works" className="hover:text-neutral-200">
              How it works
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#testimonials" className="hover:text-neutral-200">
              Testimonials
            </a>

            <a href="#testimonials" className="hover:text-neutral-200">
              login
            </a>

            <a
              href="#"
              className="flex gap-1 justify-center items-center border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get Demo{" "}
              <span className="pt-1 text-xs">
                <FaLocationArrow />
              </span>
            </a>
            <a
              href="#"
              className="bg-blue-600 text-center text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavData } from "../constants/index";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((val) => !val);
  }
  return (
    <header className="fixed top-4 left-3 right-3 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-neutral-500 bg-black/60 backdrop-blur-md px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
          {/* -----------left:logo -----------*/}
          <a href="#hero">
            <img src={logo} alt="logo" width={120} height={24} />
          </a>

          <nav className="hidden md:flex space-x-8">
            {NavData.map((item) => (
              <a
                href={item.href}
                key={item.id}
                onClick={toggleMenu}
                className="hover:text-neutral-200"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* -----------right:buttons----------- */}
          <div className="hidden md:flex justify-center items-center space-x-4">
            <a href="#" className="hover:text-neutral-700 transition">
              Login
            </a>
            <a
              href="#"
              className="flex gap-1 items-center border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get demo{" "}
              <span className=" text-xs">
                <FaLocationArrow />
              </span>
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start free trial
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
        {/* {isOpen && ( */}
        <div
          className={`md:hidden transition-all duration-300 ease-out bg-neutral-900/60 backdrop-blur-md border  border-neutral-800 rounded-xl p-4 mt-2  ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {NavData.map((item) => (
              <a
                href={item.href}
                key={item.id}
                onClick={toggleMenu}
                className="hover:text-neutral-200"
              >
                {item.title}
              </a>
            ))}

            <a href="#" className="hover:text-neutral-200">
              Login
            </a>

            <a
              href="#"
              className="flex gap-1 justify-center items-center border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get demo{" "}
              <span className="pt-1 text-xs">
                <FaLocationArrow />
              </span>
            </a>
            <a
              href="#"
              className="bg-blue-600 text-center text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start free trial
            </a>
          </div>
        </div>
        {/* )} */}
      </div>
    </header>
  );
};

export default Navbar;

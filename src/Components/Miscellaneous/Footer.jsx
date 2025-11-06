import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center space-y-6">
        {/* Brand Name */}
        <h2 className="text-2xl font-extrabold text-red-500 tracking-tight">
          Zomato
        </h2>

        {/* Footer Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium text-sm">
          <li>
            <NavLink
              to="/"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="hover:text-red-500 transition-colors duration-200"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms-of-service"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy-policy"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-red-500 rounded-full"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center space-y-2">
          <p className="flex items-center text-gray-600 text-sm">
            Zomato Clone <FaRegCopyright className="mx-1" /> 2025 | All rights
            reserved
          </p>
          <p className="text-xs text-gray-500 italic">
            Disclaimer: This website is built for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

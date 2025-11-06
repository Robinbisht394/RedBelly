import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("redBelly"));
    console.log(cartData);

    if (cartData != null) {
      setTotalCartItems(cartData.length);
    }
  }, [setTotalCartItems, setTotalCartItems]);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand Logo */}
        <h1 className="text-2xl font-extrabold text-red-500 tracking-tight">
          RedBelly
        </h1>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <FaTimes size={22} className="text-red-500" />
            ) : (
              <FaBars size={22} className="text-red-500" />
            )}
          </button>
        </div>

        {/* Menu Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-red-500 transition ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-red-500 transition ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          {/* Cart */}
          <li className="relative flex items-center">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center hover:text-red-500 transition ${
                  isActive ? "text-red-500 font-semibold" : ""
                }`
              }
            >
              <FaShoppingCart className="text-xl" />
              <span className="ml-1">Cart</span>
            </NavLink>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalCartItems}
            </span>
          </li>
          {/* User */}
          <li>
            <FaUserCircle className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer transition" />
          </li>
        </ul>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-red-500"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={22} />
          </button>

          <ul className="flex flex-col mt-20 space-y-6 text-center text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className="block py-2 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Restaurants
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="block py-2 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="block py-2 hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

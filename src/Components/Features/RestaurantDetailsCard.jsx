import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import MenuCard from "./MenuCard";

const RestaurantDetailsCard = ({ restaurant, addToCart, orderNow }) => {
  const { id, name, cuisine, rating, location, address, image, menu } =
    restaurant;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto my-8 transition-all duration-300 hover:shadow-2xl">
      {/* Restaurant Image */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={image || DefaultImage}
          alt={`${name} image`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white text-sm font-semibold px-3 py-1 rounded-full flex items-center shadow">
          <span
            className={`mr-1 ${
              rating >= 4 ? "text-green-600" : "text-yellow-600"
            }`}
          >
            ★
          </span>
          {rating}
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-6 flex flex-col md:flex-row justify-between md:items-center border-b border-gray-200">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 flex items-center text-sm sm:text-base">
            <FaBowlFood className="text-red-500 mr-2" />
            {cuisine}
          </p>
          <p className="text-gray-600 flex items-center text-sm sm:text-base">
            <FaCity className="text-red-400 mr-2" />
            {location}
          </p>
          <p className="text-gray-600 flex items-center text-sm sm:text-base">
            <FaLocationDot className="text-gray-500 mr-2" />
            {address}
          </p>
        </div>

        {/* Order Now Button */}
        <div className="mt-6 md:mt-0 flex gap-4">
          <button
            onClick={orderNow}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
          >
            Order Now
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Menu
        </h2>

        {/* Responsive Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 p-2">
          {menu && menu.length > 0 ? (
            menu.map((menuItem) => (
              <MenuCard
                key={menuItem.id}
                menu={menuItem}
                addToCart={addToCart}
                orderNow={orderNow}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No menu items available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsCard;

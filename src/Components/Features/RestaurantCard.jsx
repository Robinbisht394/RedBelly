import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

const RestaurantCard = ({ restaurant, showRestaurant }) => {
  const { id, name, cuisine, rating, location, address, image } = restaurant;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[100%] md:w-[300px] lg:w-[300px]  hover:shadow-xl transition-shadow duration-300">
      {/* Restaurant Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-white text-sm font-semibold px-2 py-1 rounded-full flex items-center shadow">
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
      <div className="p-4">
        {/* Name and Cuisine */}
        <h2 className="text-xl font-bold text-gray-800 truncate">{name}</h2>
        <p className="text-gray-500 text-sm flex items-center mt-1">
          <FaBowlFood className="text-red-500 mr-1" />
          {cuisine}
        </p>

        {/* Location */}
        <div className="mt-3 space-y-1">
          <p className="text-sm text-gray-600 flex items-center">
            <FaCity className="text-red-400 mr-2" />
            {location}
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <FaLocationDot className="text-gray-500 mr-2" />
            {address}
          </p>
        </div>
      </div>

      {/* View Button */}
      <div className="px-4 pb-4">
        <button
          onClick={() => showRestaurant(id)}
          className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg text-white font-semibold text-lg transition-colors duration-200"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

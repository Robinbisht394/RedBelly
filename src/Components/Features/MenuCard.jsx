import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import DefaultImage from "../../assets/react.svg";

const MenuCard = ({ menu, addToCart, orderNow }) => {
  const { image, item, price, id } = menu;

  return (
    <div className="w-full sm:w-[70%] md:w-[55%] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-52 overflow-hidden">
        <img
          src={image || DefaultImage}
          alt={item}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {/* Price Tag */}
        <div className="absolute bottom-3 left-3 bg-white/90 text-gray-900 font-semibold px-3 py-1 rounded-lg shadow-md flex items-center gap-1 text-sm">
          <FaRupeeSign className="text-green-600" /> {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[160px]">
        {/* Item Name */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 truncate">
          {item}
        </h2>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={() => orderNow(menu)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition-all text-sm sm:text-base"
          >
            Order Now
          </button>
          <button
            onClick={() => addToCart(menu)}
            className="p-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-all"
            aria-label="Add to Cart"
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

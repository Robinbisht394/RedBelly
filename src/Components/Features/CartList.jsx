import React from "react";
import QuantityCounter from "./QuantityCounter";
import DefaultImage from "../../assets/react.svg"; // fallback image

const CartList = ({ Item, Increase, decrease }) => {
  console.log(typeof Increase, typeof decrease);

  const { image, item, price, count } = Item;

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden w-full md:w-[95%] mx-auto mb-4 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-full sm:w-32 h-32 sm:h-32 flex-shrink-0">
        <img
          src={image || DefaultImage}
          alt={item}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Item Details */}
      <div className="flex-1 p-4 flex flex-col justify-between w-full">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{item}</h2>
        <p className="text-red-500 font-bold mt-2">
          <span className="text-gray-600 font-normal">Price:</span> ${price}
        </p>

        {/* Quantity */}
        <div className="mt-3 w-full">
          <QuantityCounter
            count={count}
            item={Item}
            Increase={Increase}
            decrease={decrease}
          />
        </div>
      </div>
    </div>
  );
};

export default CartList;

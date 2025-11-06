import React, { useState } from "react";

const QuantityCounter = ({ count, item, Increase, decrease }) => {
 

  return (
    <div className="border-2 border-black flex w-20 items-center rounded-md">
      <button
        className=" border-r-2  border-black w-[30%] text-2xl font-bold"
        onClick={() => decrease(item)}
      >
        -
      </button>
      <p className=" w-[40%] text-1xl font-bold text-center">{count}</p>
      <button
        className="border-l-2 border-black w-[30%] text-2xl font-bold"
        onClick={() => Increase(item)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;

import React, { useState, useEffect } from "react";
import CartList from "../Features/CartList";
import { toast } from "react-toastify";
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("redBelly")) || [];
    setCart(cartItem);
  }, [setCart]);

  // increase Item counter
  const IncreaseItemCount = (item) => {
    let cartItem = JSON.parse(localStorage.getItem("redBelly")) || [];

    let updatedItem = cartItem.filter((i) => {
      return i.id == item.id;
    });

    if (updatedItem[0].count < 3) {
      updatedItem[0].count++;
    } else {
      toast.error("Only 3 Items can added");
    }
    cartItem = [
      updatedItem[0],
      ...cartItem.filter((i) => {
        return i.id != item.id;
      }),
    ];
    localStorage.removeItem("redBelly");
    localStorage.setItem("redBelly", JSON.stringify(cartItem));
    setCart(cartItem);
  };

  // decraese Item count
  const decreaseItemCount = (item) => {
    let cartItem = JSON.parse(localStorage.getItem("redBelly")) || [];

    let updatedItem = cartItem.filter((i) => {
      return i.id == item.id;
    });

    if (updatedItem[0].count == 1) {
      toast.error("quantity must be 1");
    } else {
      updatedItem[0].count--;
    }
    cartItem = [
      updatedItem[0],
      ...cartItem.filter((i) => {
        return i.id != item.id;
      }),
    ];
    localStorage.removeItem("redBelly");
    localStorage.setItem("redBelly", JSON.stringify(cartItem));
    setCart(cartItem);
  };

  const cartTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * item.count, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Page Heading */}
      <div className="bg-red-500 text-white py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="text-white/90 mt-1">
          {cart.length} item{cart.length !== 1 ? "s" : ""} in your cart
        </p>
      </div>

      {/* Cart Items */}
      <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
        {cart.length === 0 && (
          <p className="text-center text-gray-500 text-lg py-10">
            Your cart is empty 😔
          </p>
        )}

        {cart.map((item, index) => (
          <CartList
            key={index}
            Item={item}
            Increase={IncreaseItemCount}
            decrease={decreaseItemCount}
          />
        ))}
      </div>

      {/* Cart Summary & Checkout */}
      {cart.length > 0 && (
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-2xl border border-gray-200">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Items: <span className="font-bold">{cart.length}</span>
            </h2>
            <h2 className="text-2xl font-bold text-red-500 mt-2">
              Total Price:{" "}
              <span className="text-gray-800">${cartTotal(cart)}</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all">
              Proceed to Checkout
            </button>
            <button
              className="border border-red-500 text-red-500 hover:bg-red-50 font-semibold py-2 px-6 rounded-lg transition-all"
              onClick={() => {
                localStorage.removeItem("redBelly");
                setCart([]);
              }}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

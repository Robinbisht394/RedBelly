import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailsCard from "./RestaurantDetailsCard";
import CartList from "./CartList";
import { ToastContainer, toast } from "react-toastify";
const RestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch("/restaurant.json");
        if (!response.ok) {
          throw new Error("Network response was not Ok");
        }

        const data = await response.json();

        const restaurant = data.restaurants;

        const filterRestaurant = restaurant.filter((res) => {
          return res.id == id;
        });

        setRestaurant(filterRestaurant);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRestaurant();
  }, [id]);

  if (isLoading) {
    return <p>Data Loading...</p>;
  }
  if (error) {
    return <p>Data couldn't fetched : {error}</p>;
  }

  const handleAddToCart = (menu) => {
    const cart = JSON.parse(localStorage.getItem("redBelly")) || [];
    if (!cart.some((m) => m.id == menu.id)) {
      menu.count = 1;
      cart.push(menu);
      localStorage.setItem("redBelly", JSON.stringify(cart));
      toast.success("Added successfully");
    } else {
      toast.error("Item Already Added to Cart");
    }
  };
  const handleOrderNow = (menu) => {
    console.log(menu.item, "order placed");
  };

  return (
    <div>
      {restaurant.map((restaurant) => {
        return (
          <RestaurantDetailsCard
            key={restaurant.id}
            restaurant={restaurant}
            addToCart={handleAddToCart}
            orderNow={handleOrderNow}
          />
        );
      })}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default RestaurantDetails;

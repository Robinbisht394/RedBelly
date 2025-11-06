import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useNavigate } from "react-router-dom";
import Filter from "../Features/Filter";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // fetch restaurants list
  const fetchRestaurant = async () => {
    try {
      const response = await fetch("./restaurant.json");
      if (!response.ok) {
        throw new Error("Network response was not Ok");
      }

      const data = await response.json();

      setRestaurantList(data.restaurants);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRestaurant();
  }, []);

  if (isLoading) {
    return <p>Data Loading...</p>;
  }
  if (error) {
    return <p>Data couldn't fetched : {error}</p>;
  }

  const showRestaurant = (id) => {
    navigate(`/restaurant/${id}`);
  };

  // user restaurant search
  const restaurantSearch = (searchValue) => {
    if (!searchValue) {
      fetchRestaurant();
      return;
    }
    const filteredRestaurant = restaurantList.filter((restaurant) => {
      return (
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        restaurant.cuisine.includes(searchValue.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(searchValue.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setRestaurantList(filteredRestaurant);
  };

  const restaurantSort = (sortType, sortOrder) => {
    let sortedRestaurants = [...restaurantList];

    switch (sortType) {
      case "price":
        sortedRestaurants.sort((a, b) => {
          const avgA =
            a.menu.reduce((sum, item) => sum + item.price, 0) / a.menu.length;
          const avgB =
            b.menu.reduce((sum, item) => sum + item.price, 0) / b.menu.length;

          return sortOrder === "ascending" ? avgA - avgB : avgB - avgA;
        });
        break;

      case "rating":
        sortedRestaurants.sort((a, b) =>
          sortOrder === "ascending" ? a.rating - b.rating : b.rating - a.rating
        );
        break;

      default:
        console.warn("Invalid sort type");
    }

    setRestaurantList(sortedRestaurants);

    return sortedRestaurants;
  };
  return (
    <>
      <Filter
        restaurant={restaurantList}
        search={restaurantSearch}
        fetchRestaurant={fetchRestaurant}
        sort={restaurantSort}
      />
      <div className=" mt-10 flex h-300 gap-4 flex-wrap border border-gray-100 p-4 overflow-y-scroll scroll-smooth items-center justify-center md:justify-between lg:justify-between">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            showRestaurant={showRestaurant}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;

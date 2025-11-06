import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faTimes,
  faAngleUp,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Filter = ({ restaurant, search, fetchRestaurant, sort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [sortType, setSortType] = useState("Price");

  const setSearchValue = (searchValue, sort) => {
    setSearchTerm(searchValue);
    search(searchTerm);
    if (!searchTerm) {
      fetchRestaurant();
    }
  };

  // const filterData = () => {
  //   let filteredRestaurant = restaurant.filter((res) => {
  //     return (
  //       res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       res.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       res.address.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });

  //   if (sortChoice) {
  //     filteredRestaurant.sort((a, b) => {
  //       if (sortChoice === "Price") {
  //         const avgPriceA =
  //           a.menu.reduce((sum, item) => sum + item.price, 0) / a.menu.length;
  //         const avgPriceB =
  //           b.menu.reduce((sum, item) => sum + item.price, 0) / b.menu.length;
  //         return sortOrder === "Ascending"
  //           ? avgPriceA - avgPriceB
  //           : avgPriceB - avgPriceA;
  //       } else if (sortChoice === "Rating") {
  //         return sortOrder === "Ascending"
  //           ? a.rating - b.rating
  //           : b.rating - a.rating;
  //       }
  //       return 0;
  //     });
  //   }
  //   return filteredRestaurant;
  // };

  // remove search Item
  const removeSearchItem = () => {
    setSearchTerm("");
    fetchRestaurant();
  };

  // sort restaurant
  const handleSortChange = (e) => {
    const { value } = e.target;
    const sortOption = value.split("-");

    sort(sortOption[0], sortOption[1]);
  };
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between rounded-xl p-4 mt-4">
      {/* Search Bar */}
      <div className="flex items-center w-full md:w-[48%] bg-gray-50 rounded-full shadow-sm border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-red-400 transition-all">
        <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search restaurants, locations, or addresses..."
          className="flex-1 bg-transparent outline-none text-gray-700 text-sm md:text-base"
        />
        {searchTerm && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-gray-400 cursor-pointer hover:text-red-500"
            onClick={() => removeSearchItem()}
          />
        )}
      </div>

      {/* Sort Dropdown */}
      <div className="flex flex-col w-full md:w-auto">
        <label
          htmlFor="sort"
          className="text-sm font-semibold text-gray-700 mb-1"
        >
          Sort Restaurants
        </label>

        <select
          id="sort"
          value={`${sortType}-${sortOrder}`}
          onChange={(e) => {
            const [type, order] = e.target.value.split("-");
            setSortType(type);
            setSortOrder(order);
            sort(type, order);
          }}
          className="bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none 
               focus:ring-2 focus:ring-red-500 text-gray-700 font-medium cursor-pointer 
               hover:border-red-400 transition-all"
        >
          <option value="price-ascending">Price: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="rating-ascending">Rating: Low to High</option>
          <option value="rating-descending">Rating: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

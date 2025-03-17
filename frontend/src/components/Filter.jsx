import React, { useState } from "react";

const FilterSection = ({
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  selectedCategory,
  setSelectedCategory,
  categories,
  availability,
  setAvailability,
  brands,
  selectedBrands,
  setSelectedBrands,
  clearFilters,
}) => {
  // Star Rating Component
  const StarRating = ({ rating, setRating }) => {
    return (
      <div className="flex justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer text-2xl ${star <= rating ? "text-blue-500" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Toggle Brand Selection
  const handleBrandClick = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand)); // Remove brand
    } else {
      setSelectedBrands([...selectedBrands, brand]); // Add brand
    }
  };

  return (
    <div className="filter-section bg-white rounded-lg p-5">
      <h3 className="text-center mb-4 text-xl text-blue-700">FILTER</h3>

      {/* Price Range Slider */}
      <div className="mb-4">
        <label className="block text-center mb-2 text-gray-700">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <div className="flex justify-center gap-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="accent-blue-500"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="accent-blue-500"
          />
        </div>
      </div>

      {/* Minimum Rating Filter */}
      <div className="mb-4 text-center">
        <label className="block mb-2 text-gray-700">Minimum Rating:</label>
        <StarRating rating={minRating} setRating={setMinRating} />
      </div>

      {/* Category Filter */}
      <div className="mb-4 text-center">
        <label className="block mb-2 text-gray-700">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 rounded-lg border border-gray-300 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Filter */}
      <div className="mb-4 text-center">
        <label className="block mb-2 text-gray-700">Availability:</label>
        <div className="flex justify-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={availability === "in-stock"}
              onChange={() => setAvailability("in-stock")}
              className="accent-blue-500"
            />
            In Stock
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={availability === "out-of-stock"}
              onChange={() => setAvailability("out-of-stock")}
              className="accent-blue-500"
            />
            Out of Stock
          </label>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4 text-center">
        <label className="block mb-2 text-gray-700">Brand:</label>
        <div className="flex flex-col gap-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandClick(brand)}
                className="accent-blue-500"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="text-center">
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
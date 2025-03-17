import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaSort, FaFilter } from "react-icons/fa";
import FilterSection from "./Filter";

const SubHeader = ({
  filteredProducts,
  sortOption,
  setSortOption,
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  minReview,
  setMinReview,
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
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  return (
    <div className="sub-header flex justify-between items-center sticky top-0 bg-white z-10 p-1 pl-[4vw] pr-[4vw] shadow-sm mt-[4vh]">
      {/* Product Count */}
      <div className="text-gray-700 font-semibold">
        {filteredProducts.length} Products
      </div>

      {/* Sort, Search, Filter, and Icons Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <div
            onClick={() => setShowSearchBar(!showSearchBar)}
            className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <FaSearch className="text-gray-700 text-xl" />
          </div>
          {showSearchBar && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 p-1 pl-3 rounded-full border border-gray-300 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              style={{ width: "200px" }}
            />
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative flex items-center">
          <div
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            className="p-3 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <FaSort className="text-gray-700 text-xl" />
          </div>
          {showSortDropdown && (
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="ml-2 p-1 rounded-full border border-gray-300 bg-slate-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="recommended">Recommended</option>
              <option value="new">New</option>
              <option value="sale">Sale</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
            </select>
          )}
        </div>

        {/* Filter Icon */}
        <div className="relative flex items-center">
          <div
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className="p-3 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <FaFilter className="text-gray-700 text-xl" />
          </div>
          {/* Filter Panel */}
          {showFilterPanel && (
            <div className="absolute top-12 right-0 w-[32rem] bg-white rounded-lg shadow-lg p-5 z-50 border border-gray-200">
              <FilterSection
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minRating={minReview}
                setMinRating={setMinReview}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                availability={availability}
                setAvailability={setAvailability}
                brands={brands}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                clearFilters={clearFilters}
              />
            </div>
          )}
        </div>

        {/* Icons (Cart and Profile) */}
        <div className="flex items-center gap-4">
          <div className="relative p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer">
            <FaShoppingCart className="text-gray-700 text-xl" />
            <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">
              3 {/* Cart count */}
            </span>
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer">
            <FaUser className="text-gray-700 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
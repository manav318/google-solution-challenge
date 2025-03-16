import React, { useState, useEffect } from "react";
import StoreHeader from "../components/StoreHeader.jsx";

const Store = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]); // [min, max]
  const [minReview, setMinReview] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("priceLowToHigh");

  // Dummy data for products
  const products = [
    {
      id: 1,
      name: "Handwoven Bamboo Basket",
      category: "Handicrafts",
      price: 15,
      rating: 4.7,
      image: "pics/bamboo1.jpg",
      boughtLastMonth: 50,
    },
    {
      id: 2,
      name: "Tribal Art Painting",
      category: "Art",
      price: 45,
      rating: 4.5,
      image: "pics/art1.jpg",
      boughtLastMonth: 30,
    },
    {
      id: 3,
      name: "Organic Turmeric Powder",
      category: "Spices",
      price: 8,
      rating: 4.6,
      image: "pics/turmeric1.jpg",
      boughtLastMonth: 120,
    },
    {
      id: 4,
      name: "Handmade Beaded Jewelry",
      category: "Jewelry",
      price: 20,
      rating: 4.4,
      image: "pics/bead.jpg",
      boughtLastMonth: 80,
    },
    {
      id: 5,
      name: "Traditional Handloom Saree",
      category: "Clothing",
      price: 35,
      rating: 4.8,
      image: "pics/shawl1.jpg",
      boughtLastMonth: 60,
    },
    {
      id: 6,
      name: "Handmade Pottery Mug",
      category: "Handicrafts",
      price: 12,
      rating: 4.3,
      image: "pics/mug1.jpg",
      boughtLastMonth: 90,
    },
    {
      id: 7,
      name: "Organic Cinnamon Sticks",
      category: "Spices",
      price: 10,
      rating: 4.7,
      image: "pics/stick2.jpg",
      boughtLastMonth: 100,
    },
    {
      id: 8,
      name: "Handcrafted Wooden Toys",
      category: "Toys",
      price: 18,
      rating: 4.6,
      image: "pics/toy1.jpg",
      boughtLastMonth: 40,
    },
    {
      id: 9,
      name: "Natural Herbal Soap",
      category: "Personal Care",
      price: 5,
      rating: 4.5,
      image: "pics/soap1.jpg",
      boughtLastMonth: 150,
    },
    {
      id: 10,
      name: "Handmade Jute Bag",
      category: "Accessories",
      price: 25,
      rating: 4.4,
      image: "pics/jute_bag2.jpg",
      boughtLastMonth: 70,
    },
    {
      id: 11,
      name: "Local Literature Book",
      category: "Books",
      price: 10,
      rating: 4.2,
      image: "pics/book2.jpg",
      boughtLastMonth: 55,
    },
    {
      id: 12,
      name: "Handmade Incense Sticks",
      category: "Wellness",
      price: 6,
      rating: 4.3,
      image: "pics/stick1.jpg",
      boughtLastMonth: 200,
    },
    {
      id: 13,
      name: "Traditional Clay Pot",
      category: "Handicrafts",
      price: 20,
      rating: 4.6,
      image: "pics/clay_pot1.jpg",
      boughtLastMonth: 65,
    },
    {
      id: 14,
      name: "Organic Honey",
      category: "Food",
      price: 12,
      rating: 4.8,
      image: "pics/honey1.jpg",
      boughtLastMonth: 180,
    },
    {
      id: 15,
      name: "Handmade Woolen Shawl",
      category: "Clothing",
      price: 40,
      rating: 4.7,
      image: "pics/shawl1.jpg",
      boughtLastMonth: 45,
    },
  ];

  // Preload images
  useEffect(() => {
    products.forEach(product => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);

  // Filter and sort products based on state
  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.rating >= minReview &&
        (selectedCategory ? product.category === selectedCategory : true) &&
        (searchQuery
          ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
          : true)
    )
    .sort((a, b) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      if (sortOption === "ratingHighToLow") return b.rating - a.rating;
      if (sortOption === "ratingLowToHigh") return a.rating - b.rating;
      return 0;
    });

  // Categories list (updated to include all categories)
  const categories = [
    "Handicrafts",
    "Art",
    "Spices",
    "Jewelry",
    "Clothing",
    "Toys",
    "Personal Care",
    "Accessories",
    "Books",
    "Wellness",
    "Food",
  ];

  // Star Rating Filter
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

  // Toggle Category Selection
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // Unselect if already selected
    } else {
      setSelectedCategory(category); // Select the category
    }
  };

  // Display Star Rating
  const renderStarRating = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-[6vh] p-[1vh]">
      {/* Top Section - Full Width Graphic */}
      <StoreHeader />

      {/* Main Content Section */}
      <div className="main-content flex mt-5 relative">
        {/* Left Section - Filters */}
        <div className="left-section w-1/5 p-5 bg-gray-100 rounded-lg shadow-lg sticky top-0 self-start h-screen overflow-y-auto z-20">
          <h3 className="text-center mb-5 text-gray-800">Filters</h3>

          {/* Price Range Slider */}
          <div className="mb-5">
            <label className="block text-center mb-2">
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

          {/* Minimum Review Filter */}
          <div className="mb-5 text-center">
            <label className="block mb-2">Minimum Review:</label>
            <StarRating rating={minReview} setRating={setMinReview} />
          </div>

          {/* Category List */}
          <div className="mb-5 text-center">
            <label className="block mb-2">Categories:</label>
            <div className="flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`p-2 rounded-lg border ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-white text-gray-800"} cursor-pointer`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Main Content */}
        <div className="right-section flex-1 p-2 relative">
          {/* Sub Header */}
          <div className="sub-header flex justify-between sticky top-0 bg-white z-10 p-2 shadow-lg">
            <div>{filteredProducts.length} Products</div>
            <div className="flex gap-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 rounded-lg border bg-white accent-blue-500"
              >
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="ratingHighToLow">Rating: High to Low</option>
                <option value="ratingLowToHigh">Rating: Low to High</option>
              </select>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 rounded-lg border bg-white"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid grid grid-cols-3 gap-5 mt-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card border p-2 rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="flex justify-between mt-2">
                  <div>
                    <h4 className="m-0">{product.name}</h4>
                    <p className="m-0">${product.price}</p>
                  </div>
                  <p className="m-0 text-gray-600">{product.category}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  {renderStarRating(product.rating)}
                  <p className="m-0">{product.boughtLastMonth} bought</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
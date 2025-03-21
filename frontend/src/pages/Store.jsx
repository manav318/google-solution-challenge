import React, { useState, useEffect, useMemo, useRef } from "react";
import { useVirtual } from 'react-virtual';
import StoreHeader from "../components/StoreHeader.jsx";
import SubHeader from "../components/SubHeader.jsx"; // Import SubHeader
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Icons for search, cart, and profile
import ProductCard from "@/components/ProductCard.jsx";

const Store = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]); // [min, max]
  const [minReview, setMinReview] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("priceLowToHigh");
  const [availability, setAvailability] = useState("in-stock");
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Dummy brands data
  const brands = ["Local Artisans", "Tribal Crafts", "Organic Foods", "Village Industries"];

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setMinReview(0);
    setSelectedCategory("");
    setSelectedBrands([]);
    setAvailability("in-stock");
  };

  // Dummy data for products
  const products = [
    {
      id: 1,
      name: "Handwoven Bamboo Basket",
      category: "Handicrafts",
      price: 15,
      rating: 4.7,
      image: "/pics/bamboo1.jpg",
      boughtLastMonth: 50,
    },
    {
      id: 2,
      name: "Tribal Art Painting",
      category: "Art",
      price: 45,
      rating: 4.5,
      image: "/pics/art1.jpg",
      boughtLastMonth: 30,
    },
    {
      id: 3,
      name: "Organic Turmeric Powder",
      category: "Spices",
      price: 8,
      rating: 4.6,
      image: "/pics/turmeric1.jpg",
      boughtLastMonth: 120,
    },
    {
      id: 4,
      name: "Handmade Beaded Jewelry",
      category: "Jewelry",
      price: 20,
      rating: 4.4,
      image: "/pics/bead.jpg",
      boughtLastMonth: 80,
    },
    {
      id: 5,
      name: "Traditional Handloom Saree",
      category: "Clothing",
      price: 35,
      rating: 4.8,
      image: "/pics/shawl1.jpg",
      boughtLastMonth: 60,
    },
    {
      id: 6,
      name: "Handmade Pottery Mug",
      category: "Handicrafts",
      price: 12,
      rating: 4.3,
      image: "/pics/mug1.jpg",
      boughtLastMonth: 90,
    },
    {
      id: 7,
      name: "Organic Cinnamon Sticks",
      category: "Spices",
      price: 10,
      rating: 4.7,
      image: "/pics/stick2.jpg",
      boughtLastMonth: 100,
    },
    {
      id: 8,
      name: "Handcrafted Wooden Toys",
      category: "Toys",
      price: 18,
      rating: 4.6,
      image: "/pics/toy1.jpg",
      boughtLastMonth: 40,
    },
    {
      id: 9,
      name: "Natural Herbal Soap",
      category: "Personal Care",
      price: 5,
      rating: 4.5,
      image: "/pics/soap1.jpg",
      boughtLastMonth: 150,
    },
    {
      id: 10,
      name: "Handmade Jute Bag",
      category: "Accessories",
      price: 25,
      rating: 4.4,
      image: "/pics/jute_bag2.jpg",
      boughtLastMonth: 70,
    },
    {
      id: 11,
      name: "Local Literature Book",
      category: "Books",
      price: 10,
      rating: 4.2,
      image: "/pics/book2.jpg",
      boughtLastMonth: 55,
    },
    {
      id: 12,
      name: "Handmade Incense Sticks",
      category: "Wellness",
      price: 6,
      rating: 4.3,
      image: "/pics/stick1.jpg",
      boughtLastMonth: 200,
    },
    {
      id: 13,
      name: "Traditional Clay Pot",
      category: "Handicrafts",
      price: 20,
      rating: 4.6,
      image: "/pics/clay_pot1.jpg",
      boughtLastMonth: 65,
    },
    {
      id: 14,
      name: "Organic Honey",
      category: "Food",
      price: 12,
      rating: 4.8,
      image: "/pics/honey1.jpg",
      boughtLastMonth: 180,
    },
    {
      id: 15,
      name: "Handmade Woolen Shawl",
      category: "Clothing",
      price: 40,
      rating: 4.7,
      image: "/pics/shawl1.jpg",
      boughtLastMonth: 45,
    },
  ];

  // Memoize filtered products
  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          product.price >= priceRange[0] &&
          product.price <= priceRange[1] &&
          product.rating >= minReview &&
          (selectedCategory ? product.category === selectedCategory : true) &&
          (searchQuery
            ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
            : true) &&
          (selectedBrands.length > 0 ? selectedBrands.includes(product.brand) : true)
      )
      .sort((a, b) => {
        if (sortOption === "priceLowToHigh") return a.price - b.price;
        if (sortOption === "priceHighToLow") return b.price - a.price;
        if (sortOption === "ratingHighToLow") return b.rating - b.rating;
        if (sortOption === "ratingLowToHigh") return a.rating - b.rating;
        return 0;
      });
  }, [products, priceRange, minReview, selectedCategory, searchQuery, selectedBrands, sortOption]);

  // Optimize image loading with intersection observer
  const imageObserver = useMemo(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      });
    });
  }, []);

  // Preload images with priority
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = filteredProducts.map((product) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = product.image;
        });
      });
      await Promise.all(imagePromises);
    };
    preloadImages();
  }, [filteredProducts]);

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

      {/* SubHeader Section */}
      <SubHeader
        filteredProducts={filteredProducts}
        sortOption={sortOption}
        setSortOption={setSortOption}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minReview={minReview}
        setMinReview={setMinReview}
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

      {/* Main Store Section */}
      <div className="main-content flex mt-[2vh] relative">
        {/* product grid Content */}
        <div className="right-section flex-1 p-2 relative">
          {/* Product Grid */}
          <div className="product-grid grid grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  imageObserver={imageObserver}
                />
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default React.memo(Store);
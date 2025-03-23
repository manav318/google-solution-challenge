import React, { useState, useEffect, useMemo, useRef } from "react";
import { useVirtual } from 'react-virtual';
import { useNavigate } from 'react-router-dom';
import StoreHeader from "../components/StoreHeader.jsx";
import SubHeader from "../components/SubHeader.jsx"; // Import SubHeader
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Icons for search, cart, and profile
import ProductCard from "@/components/ProductCard.jsx";

// Move products array outside the component and export it
export const products = [
  {
    id: 1,
    name: "Handwoven Bamboo Basket",
    category: "Handicrafts",
    price: 15,
    rating: 4.7,
    image: "/pics/bamboo1.jpg",
    boughtLastMonth: 50,
    description: "This handwoven bamboo basket is a masterpiece of traditional craftsmanship, made by skilled artisans using age-old weaving techniques. Each basket is uniquely designed, combining functionality with aesthetic appeal. Perfect for storage, decoration, or even as a gift, this eco-friendly basket is durable, lightweight, and versatile. Its natural texture and earthy tones make it a perfect addition to any home, blending seamlessly with modern and rustic interiors alike.",
    features: [
      "Eco-friendly and sustainable",
      "Handmade by skilled artisans",
      "Durable and long-lasting",
      "Lightweight and easy to carry",
      "Natural bamboo material",
      "Versatile for storage or decoration",
      "Unique design for each piece",
      "Earthy tones for a natural look",
      "Easy to clean and maintain",
      "Supports traditional craftsmanship"
    ],
    images: ["/pics/bamboo1.jpg", "/pics/bamboo1.jpg", "/pics/bamboo1.jpg", "/pics/bamboo1.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Maya Crafts",
      age: 45,
      profilePic: "/pics/seller1.jpg",
      bio: "Third-generation basket weaver from Kerala specializing in traditional bamboo crafts."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Beautiful craftsmanship! The basket is sturdy and looks amazing in my living room." },
        { id: 2, rating: 4, text: "Great quality and eco-friendly. Perfect for storing fruits and vegetables." },
        { id: 3, rating: 5, text: "Love the natural look and feel. It’s lightweight yet very durable." },
        { id: 4, rating: 5, text: "A perfect blend of functionality and aesthetics. Highly recommended!" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans feels great. The basket is worth every penny." },
        { id: 2, rating: 4, text: "Great quality and unique design. Fits perfectly in my kitchen." },
        { id: 3, rating: 5, text: "Eco-friendly and durable. I use it for picnics and it’s perfect!" },
        { id: 4, rating: 5, text: "A beautiful addition to my home decor. Love the natural texture." }
      ]
    },
    faq: [
      { question: "Is this hand-woven?", answer: "Yes, entirely handmade by artisans using traditional techniques." },
      { question: "What are the dimensions?", answer: "12 inches in diameter, 8 inches height." }
    ],
    similarProductIds: [6, 13]
  },
  {
    id: 2,
    name: "Tribal Art Painting",
    category: "Art",
    price: 45,
    rating: 4.5,
    image: "/pics/art1.jpg",
    boughtLastMonth: 30,
    description: "Authentic tribal art painting created by indigenous artists. A perfect addition to your home decor.",
    features: ["Hand-painted", "Unique design", "Cultural heritage"],
    images: ["/pics/art1.jpg", "/pics/art1.jpg", "/pics/art1.jpg", "/pics/art1.jpg"],
    expectedDelivery: "5-7 business days",
    seller: {
      name: "Tribal Artisans",
      age: 38,
      profilePic: "/pics/seller2.jpg",
      bio: "A collective of tribal artists preserving and promoting traditional art forms."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Stunning artwork!" },
        { id: 2, rating: 4, text: "Beautiful and vibrant" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting indigenous artists" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this hand-painted?", answer: "Yes, each piece is hand-painted by tribal artists" },
      { question: "What are the dimensions?", answer: "24 inches by 18 inches" }
    ],
    similarProductIds: [3, 8] // References to other art products
  },
  {
    id: 3,
    name: "Organic Turmeric Powder",
    category: "Spices",
    price: 8,
    rating: 4.6,
    image: "/pics/turmeric1.jpg",
    boughtLastMonth: 120,
    description: "Pure organic turmeric powder sourced from local farmers. Ideal for cooking and health benefits.",
    features: ["Organic", "Non-GMO", "Rich in curcumin"],
    images: ["/pics/turmeric1.jpg", "/pics/turmeric1.jpg", "/pics/turmeric1.jpg", "/pics/turmeric1.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Organic Farms",
      age: 50,
      profilePic: "/pics/seller3.jpg",
      bio: "Family-owned organic farm dedicated to sustainable and eco-friendly farming practices."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "High-quality turmeric!" },
        { id: 2, rating: 4, text: "Great for cooking" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local farmers" },
        { id: 2, rating: 4, text: "Excellent quality" }
      ]
    },
    faq: [
      { question: "Is this organic?", answer: "Yes, certified organic and non-GMO" },
      { question: "What is the shelf life?", answer: "12 months" }
    ],
    similarProductIds: [7, 14] // References to other spice products
  },
  {
    id: 4,
    name: "Handmade Beaded Jewelry",
    category: "Jewelry",
    price: 20,
    rating: 4.4,
    image: "/pics/bead.jpg",
    boughtLastMonth: 80,
    description: "Exquisite handmade beaded jewelry crafted by skilled artisans. Perfect for any occasion.",
    features: ["Handmade", "Unique design", "High-quality beads"],
    images: ["/pics/bead.jpg", "/pics/bead.jpg", "/pics/bead.jpg", "/pics/bead.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Bead Artisans",
      age: 42,
      profilePic: "/pics/seller4.jpg",
      bio: "A group of talented artisans specializing in creating beautiful beaded jewelry."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Gorgeous jewelry!" },
        { id: 2, rating: 4, text: "Well-crafted and unique" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "What materials are used?", answer: "High-quality beads and durable thread" }
    ],
    similarProductIds: [5, 10] // References to other jewelry products
  },
  {
    id: 5,
    name: "Traditional Handloom Saree",
    category: "Clothing",
    price: 35,
    rating: 4.8,
    image: "/pics/shawl1.jpg",
    boughtLastMonth: 60,
    description: "Elegant traditional handloom saree made from premium quality fabric. Perfect for special occasions.",
    features: ["Handloom", "Premium fabric", "Traditional design"],
    images: ["/pics/shawl1.jpg", "/pics/shawl1.jpg", "/pics/shawl1.jpg", "/pics/shawl1.jpg"],
    expectedDelivery: "5-7 business days",
    seller: {
      name: "Handloom Weavers",
      age: 48,
      profilePic: "/pics/seller5.jpg",
      bio: "A community of skilled weavers dedicated to preserving traditional handloom techniques."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Beautiful saree!" },
        { id: 2, rating: 4, text: "High-quality fabric" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting traditional weavers" },
        { id: 2, rating: 4, text: "Great craftsmanship" }
      ]
    },
    faq: [
      { question: "Is this handloom?", answer: "Yes, woven using traditional handloom techniques" },
      { question: "What is the fabric?", answer: "Premium quality cotton" }
    ],
    similarProductIds: [1, 15] // References to other clothing products
  },
  {
    id: 6,
    name: "Handmade Pottery Mug",
    category: "Handicrafts",
    price: 12,
    rating: 4.3,
    image: "/pics/mug1.jpg",
    boughtLastMonth: 90,
    description: "Beautiful handmade pottery mug crafted by skilled artisans. Perfect for your morning coffee.",
    features: ["Handmade", "Unique design", "Microwave safe"],
    images: ["/pics/mug1.jpg", "/pics/mug1.jpg", "/pics/mug1.jpg", "/pics/mug1.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Pottery Artisans",
      age: 40,
      profilePic: "/pics/seller6.jpg",
      bio: "A group of talented potters creating beautiful and functional pottery pieces."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Lovely mug!" },
        { id: 2, rating: 4, text: "Well-crafted and unique" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Is it microwave safe?", answer: "Yes, it is microwave safe" }
    ],
    similarProductIds: [1, 13] // References to other handicraft products
  },
  {
    id: 7,
    name: "Organic Cinnamon Sticks",
    category: "Spices",
    price: 10,
    rating: 4.7,
    image: "/pics/stick2.jpg",
    boughtLastMonth: 100,
    description: "Pure organic cinnamon sticks sourced from local farmers. Ideal for cooking and health benefits.",
    features: ["Organic", "Non-GMO", "Rich in flavor"],
    images: ["/pics/stick2.jpg", "/pics/stick2.jpg", "/pics/stick2.jpg", "/pics/stick2.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Organic Farms",
      age: 50,
      profilePic: "/pics/seller3.jpg",
      bio: "Family-owned organic farm dedicated to sustainable and eco-friendly farming practices."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "High-quality cinnamon!" },
        { id: 2, rating: 4, text: "Great for cooking" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local farmers" },
        { id: 2, rating: 4, text: "Excellent quality" }
      ]
    },
    faq: [
      { question: "Is this organic?", answer: "Yes, certified organic and non-GMO" },
      { question: "What is the shelf life?", answer: "12 months" }
    ],
    similarProductIds: [3, 14] // References to other spice products
  },
  {
    id: 8,
    name: "Handcrafted Wooden Toys",
    category: "Toys",
    price: 18,
    rating: 4.6,
    image: "/pics/toy1.jpg",
    boughtLastMonth: 40,
    description: "Charming handcrafted wooden toys made by skilled artisans. Safe and durable for children.",
    features: ["Handmade", "Eco-friendly", "Non-toxic"],
    images: ["/pics/toy1.jpg", "/pics/toy1.jpg", "/pics/toy1.jpg", "/pics/toy1.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Wooden Toy Makers",
      age: 35,
      profilePic: "/pics/seller7.jpg",
      bio: "A group of artisans dedicated to creating safe and eco-friendly wooden toys."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Adorable toys!" },
        { id: 2, rating: 4, text: "Well-crafted and safe" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Are these handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Are they safe for children?", answer: "Yes, made from non-toxic materials" }
    ],
    similarProductIds: [2, 9] // References to other toy products
  },
  {
    id: 9,
    name: "Natural Herbal Soap",
    category: "Personal Care",
    price: 5,
    rating: 4.5,
    image: "/pics/soap1.jpg",
    boughtLastMonth: 150,
    description: "Natural herbal soap made from organic ingredients. Gentle and nourishing for the skin.",
    features: ["Organic", "Non-GMO", "Gentle on skin"],
    images: ["/pics/soap1.jpg", "/pics/soap1.jpg", "/pics/soap1.jpg", "/pics/soap1.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Herbal Care",
      age: 45,
      profilePic: "/pics/seller8.jpg",
      bio: "A family-owned business specializing in natural and organic personal care products."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Lovely soap!" },
        { id: 2, rating: 4, text: "Gentle and nourishing" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local businesses" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this organic?", answer: "Yes, made from organic ingredients" },
      { question: "Is it suitable for sensitive skin?", answer: "Yes, gentle and nourishing" }
    ],
    similarProductIds: [12, 14] // References to other personal care products
  },
  {
    id: 10,
    name: "Handmade Jute Bag",
    category: "Accessories",
    price: 25,
    rating: 4.4,
    image: "/pics/jute_bag2.jpg",
    boughtLastMonth: 70,
    description: "Stylish handmade jute bag crafted by skilled artisans. Perfect for everyday use.",
    features: ["Handmade", "Eco-friendly", "Durable"],
    images: ["/pics/jute_bag2.jpg", "/pics/jute_bag2.jpg", "/pics/jute_bag2.jpg", "/pics/jute_bag2.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Jute Artisans",
      age: 40,
      profilePic: "/pics/seller9.jpg",
      bio: "A group of talented artisans creating beautiful and functional jute bags."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Lovely bag!" },
        { id: 2, rating: 4, text: "Well-crafted and durable" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Is it eco-friendly?", answer: "Yes, made from natural jute" }
    ],
    similarProductIds: [4, 11] // References to other accessory products
  },
  {
    id: 11,
    name: "Local Literature Book",
    category: "Books",
    price: 10,
    rating: 4.2,
    image: "/pics/book2.jpg",
    boughtLastMonth: 55,
    description: "A captivating book showcasing local literature and stories. A must-read for book lovers.",
    features: ["Local literature", "Engaging stories", "High-quality print"],
    images: ["/pics/book2.jpg", "/pics/book2.jpg", "/pics/book2.jpg", "/pics/book2.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Local Authors",
      age: 35,
      profilePic: "/pics/seller10.jpg",
      bio: "A collective of local authors sharing their stories and experiences through literature."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Great book!" },
        { id: 2, rating: 4, text: "Engaging and well-written" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local authors" },
        { id: 2, rating: 4, text: "Excellent read" }
      ]
    },
    faq: [
      { question: "Is this book written by local authors?", answer: "Yes, written by local authors" },
      { question: "What is the genre?", answer: "Local literature and stories" }
    ],
    similarProductIds: [10, 12] // References to other book products
  },
  {
    id: 12,
    name: "Handmade Incense Sticks",
    category: "Wellness",
    price: 6,
    rating: 4.3,
    image: "/pics/stick1.jpg",
    boughtLastMonth: 200,
    description: "Natural handmade incense sticks made from organic ingredients. Perfect for relaxation and meditation.",
    features: ["Handmade", "Organic", "Aromatic"],
    images: ["/pics/stick1.jpg", "/pics/stick1.jpg", "/pics/stick1.jpg", "/pics/stick1.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Wellness Artisans",
      age: 45,
      profilePic: "/pics/seller11.jpg",
      bio: "A group of artisans dedicated to creating natural and aromatic wellness products."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Lovely incense!" },
        { id: 2, rating: 4, text: "Aromatic and relaxing" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Are these handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Are they organic?", answer: "Yes, made from organic ingredients" }
    ],
    similarProductIds: [9, 14] // References to other wellness products
  },
  {
    id: 13,
    name: "Traditional Clay Pot",
    category: "Handicrafts",
    price: 20,
    rating: 4.6,
    image: "/pics/clay_pot1.jpg",
    boughtLastMonth: 65,
    description: "Beautiful traditional clay pot crafted by skilled artisans. Perfect for cooking and decoration.",
    features: ["Handmade", "Eco-friendly", "Durable"],
    images: ["/pics/clay_pot1.jpg", "/pics/clay_pot1.jpg", "/pics/clay_pot1.jpg", "/pics/clay_pot1.jpg"],
    expectedDelivery: "3-5 business days",
    seller: {
      name: "Clay Artisans",
      age: 50,
      profilePic: "/pics/seller12.jpg",
      bio: "A group of talented potters creating beautiful and functional clay pots."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Lovely pot!" },
        { id: 2, rating: 4, text: "Well-crafted and unique" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great quality" }
      ]
    },
    faq: [
      { question: "Is this handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Is it eco-friendly?", answer: "Yes, made from natural clay" }
    ],
    similarProductIds: [1, 6] // References to other handicraft products
  },
  {
    id: 14,
    name: "Organic Honey",
    category: "Food",
    price: 12,
    rating: 4.8,
    image: "/pics/honey1.jpg",
    boughtLastMonth: 180,
    description: "Pure organic honey sourced from local beekeepers. Ideal for cooking and health benefits.",
    features: ["Organic", "Non-GMO", "Rich in flavor"],
    images: ["/pics/honey1.jpg", "/pics/honey1.jpg", "/pics/honey1.jpg", "/pics/honey1.jpg"],
    expectedDelivery: "2-4 business days",
    seller: {
      name: "Organic Beekeepers",
      age: 50,
      profilePic: "/pics/seller13.jpg",
      bio: "Family-owned beekeeping business dedicated to sustainable and eco-friendly practices."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "High-quality honey!" },
        { id: 2, rating: 4, text: "Great for cooking" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local beekeepers" },
        { id: 2, rating: 4, text: "Excellent quality" }
      ]
    },
    faq: [
      { question: "Is this organic?", answer: "Yes, certified organic and non-GMO" },
      { question: "What is the shelf life?", answer: "12 months" }
    ],
    similarProductIds: [3, 7] // References to other food products
  },
  {
    id: 15,
    name: "Handmade Woolen Shawl",
    category: "Clothing",
    price: 40,
    rating: 4.7,
    image: "/pics/shawl1.jpg",
    boughtLastMonth: 45,
    description: "Elegant handmade woolen shawl crafted by skilled artisans. Perfect for cold weather.",
    features: ["Handmade", "Warm and cozy", "Traditional design"],
    images: ["/pics/shawl1.jpg", "/pics/shawl1.jpg", "/pics/shawl1.jpg", "/pics/shawl1.jpg"],
    expectedDelivery: "5-7 business days",
    seller: {
      name: "Woolen Artisans",
      age: 48,
      profilePic: "/pics/seller14.jpg",
      bio: "A community of skilled artisans dedicated to creating beautiful and warm woolen shawls."
    },
    reviews: {
      global: [
        { id: 1, rating: 5, text: "Beautiful shawl!" },
        { id: 2, rating: 4, text: "High-quality wool" }
      ],
      local: [
        { id: 1, rating: 5, text: "Supporting local artisans" },
        { id: 2, rating: 4, text: "Great craftsmanship" }
      ]
    },
    faq: [
      { question: "Is this handmade?", answer: "Yes, each piece is handmade by skilled artisans" },
      { question: "Is it warm?", answer: "Yes, made from high-quality wool" }
    ],
    similarProductIds: [5, 10] // References to other clothing products
  }
];

const Store = () => {
  const navigate = useNavigate();
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

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
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
              <div onClick={() => handleProductClick(product.id)} key={product.id}>
                <ProductCard 
                  product={product}
                  imageObserver={imageObserver}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default React.memo(Store);
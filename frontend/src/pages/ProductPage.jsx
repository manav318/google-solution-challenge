import React, { useState } from "react";

const Product = () => {
    const [showDescription, setShowDescription] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);

    // Temporary data - replace with actual data
    const productImages = Array(4).fill("https://via.placeholder.com/150");
    const sellerInfo = {
        name: "John Doe",
        age: 35,
        profilePic: "https://via.placeholder.com/50",
        bio: "Professional seller with 10 years of experience. Specialized in home goods and electronics."
    };

    const similarProducts = Array(5).fill({
        image: "https://via.placeholder.com/150",
        name: "Similar Product",
        price: "$99.99"
    });

    const reviews = [
        { id: 1, type: "global", text: "Great product! Highly recommend.", rating: 5 },
        { id: 2, type: "local", text: "Good quality but delivery was late.", rating: 4 },
    ];

    return (
        <div className="p-5 max-w-7xl mx-auto mt-[6vh]">
            {/* Top Section */}
            <div className="flex gap-10 mb-10">
                {/* Image Gallery */}
                <div className="w-[30vw] h-[50vh] flex">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-2.5 mr-2.5">
                        {productImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Thumbnail ${i + 1}`}
                                className="w-15 h-15 object-cover cursor-pointer"
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="flex-1">
                        <img
                            src={productImages[0]}
                            alt="Main Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h1 className="text-4xl mb-5">Product Name</h1>
                    <p className="mb-4 leading-relaxed">
                        Multi-line product description goes here. This is a detailed explanation of the product
                        features and benefits.
                    </p>
                    <div className="text-2xl font-bold mb-4">$299.99</div>
                    <div className="flex items-center gap-2.5 mb-4">
                        <div className="flex">
                            {"★".repeat(4)}
                            <span className="text-gray-300">★</span>
                        </div>
                        <span>(2k+ reviews)</span>
                    </div>
                    <div>Expected delivery date: March 25, 2024</div>
                </div>
            </div>

            {/* Seller Section */}
            <div className="w-[70vw] mx-auto mb-10 border border-gray-200 p-5 rounded-lg">
                <div className="flex gap-5 items-center">
                    <img
                        src={sellerInfo.profilePic}
                        alt="Seller"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="m-0 mb-1.5">{sellerInfo.name}</h2>
                        <p className="m-0 mb-1.5 text-gray-600">Age: {sellerInfo.age}</p>
                        <p className="m-0">{sellerInfo.bio}</p>
                    </div>
                </div>
            </div>

            {/* Buy Now and Add to Cart Buttons */}
            <div className="w-[70vw] mx-auto mb-10 flex gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Buy Now
                </button>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Add to Cart
                </button>
            </div>

            {/* Dropdown Sections */}
            <div className="w-[70vw] mx-auto">
                <div className="mb-5">
                    <div 
                        className="p-4 border border-gray-200 cursor-pointer flex justify-between items-center"
                        onClick={() => setShowDescription(!showDescription)}
                    >
                        <h3 className="m-0">Description</h3>
                        <span>{showDescription ? "−" : "+"}</span>
                    </div>
                    {showDescription && (
                        <div className="p-4 border border-gray-200 border-t-0">
                            <p>Full product description with detailed information about materials, usage instructions, and care guidelines.</p>
                        </div>
                    )}
                </div>

                <div className="mb-5">
                    <div 
                        className="p-4 border border-gray-200 cursor-pointer flex justify-between items-center"
                        onClick={() => setShowFeatures(!showFeatures)}
                    >
                        <h3 className="m-0">Features</h3>
                        <span>{showFeatures ? "−" : "+"}</span>
                    </div>
                    {showFeatures && (
                        <div className="p-4 border border-gray-200 border-t-0">
                            <ul>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="w-[70vw] mx-auto mb-10">
                <div 
                    className="p-4 border border-gray-200 cursor-pointer flex justify-between items-center"
                    onClick={() => setShowFAQ(!showFAQ)}
                >
                    <h3 className="m-0">Frequently Asked Questions</h3>
                    <span>{showFAQ ? "−" : "+"}</span>
                </div>
                {showFAQ && (
                    <div className="p-4 border border-gray-200 border-t-0">
                        <p>Q: What is the return policy?</p>
                        <p>A: 30-day return policy.</p>
                        <button className="mt-2 text-blue-600 hover:underline">
                            Ask a Question
                        </button>
                    </div>
                )}
            </div>

            {/* Similar Products Slider */}
            <div className="w-[70vw] mx-auto mb-10">
                <h3 className="text-2xl mb-4">Similar Products</h3>
                <div className="flex overflow-x-auto gap-4">
                    {similarProducts.map((product, i) => (
                        <div key={i} className="flex-shrink-0 w-48">
                            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
                            <p className="mt-2">{product.name}</p>
                            <p className="text-gray-600">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            <div className="w-[70vw] mx-auto mb-10">
                <h3 className="text-2xl mb-4">Reviews</h3>
                <button 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-4"
                    onClick={() => setShowReviewForm(!showReviewForm)}
                >
                    Write a Review
                </button>
                {showReviewForm && (
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <textarea 
                            className="w-full p-2 border border-gray-200 rounded-lg mb-2"
                            placeholder="Write your review..."
                            rows="4"
                        />
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                            Submit Review
                        </button>
                    </div>
                )}
            </div>

            {/* Summary Section */}
            <div className="w-[70vw] mx-auto mb-10">
                <h3 className="text-2xl mb-4">Summary by Gemini</h3>
                <p className="p-4 border border-gray-200 rounded-lg">
                    This product has received overwhelmingly positive reviews for its quality and durability. Customers appreciate its value for money and timely delivery.
                </p>
            </div>

            {/* People Reviews Section */}
            <div className="w-[70vw] mx-auto mb-10">
                <h3 className="text-2xl mb-4">People Reviews</h3>
                <div className="flex gap-4 mb-4">
                    <button className="text-blue-600 hover:underline">Global Reviews</button>
                    <button className="text-blue-600 hover:underline">Local Reviews</button>
                </div>
                <div>
                    {reviews.map((review) => (
                        <div key={review.id} className="p-4 border border-gray-200 rounded-lg mb-2">
                            <div className="flex">
                                {"★".repeat(review.rating)}
                                <span className="text-gray-300">{"★".repeat(5 - review.rating)}</span>
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
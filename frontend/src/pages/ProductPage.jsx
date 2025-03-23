import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { products } from './Store.jsx';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [newAnswer, setNewAnswer] = useState("");
    const [summary,setSummary]=useState("")
    useEffect(() => {
        
        
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        if (foundProduct) {
            summarize(foundProduct);
        }
        
        
    }, [id]);

    const summarize = async (product) => {
        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_geminiAPIKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const reviewText = product.reviews.global.map(review => review.text).join(' ') + " " + product.reviews.local.map(review => review.text).join(' ');
        const prompt = "Summarize the following product reviews in plain text: " + reviewText;
        console.log("prompt: ", prompt);
        const result = await model.generateContent(prompt);
        console.log("result", result);
        setSummary(result.response.text());
    };

    // Get similar products using similarProductIds
    const similarProducts = product ? 
        product.similarProductIds.map(id => products.find(p => p.id === id)) : [];

    const handleAddFAQ = () => {
        if (newQuestion && newAnswer) {
            const updatedProduct = { ...product };
            updatedProduct.faq.push({ question: newQuestion, answer: newAnswer });
            setProduct(updatedProduct);
            setNewQuestion("");
            setNewAnswer("");
        }
    };
    
    if (!product) return <div>Loading...</div>;

    return (
        <div className="p-5 max-w-7xl mx-auto mt-[6vh]">
            {/* Top Section */}
            <div className="flex gap-10 mb-10">
                {/* Image Gallery */}
                <div className="w-[600px] flex gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-4">
                        {product.images.map((img, i) => (
                            <div key={i} className="w-[10vh] h-[10vh] rounded-md">
                                <img
                                    src={img}
                                    alt={`${product.name} ${i + 1}`}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="w-[28vw] h-[28vw]">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h1 className="text-4xl mb-5">{product.name}</h1>
                    <p className="mb-4 leading-relaxed">{product.description}</p>
                    <div className="text-2xl font-bold mb-4">${product.price}</div>
                    <div className="flex items-center gap-2.5 mb-4">
                        <div className="flex">
                            {"★".repeat(Math.floor(product.rating))}
                            <span className="text-gray-300">{"★".repeat(5 - Math.floor(product.rating))}</span>
                        </div>
                        <span>({product.reviews.global.length + product.reviews.local.length} reviews)</span>
                    </div>
                    <div>Expected delivery: {product.expectedDelivery}</div>
                </div>
            </div>

            {/* Seller Section */}
            <div className="w-[70vw] mx-auto mb-10 border border-gray-200 p-5 rounded-lg">
                <div className="flex gap-5 items-center">
                    <img
                        src={product.seller.profilePic}
                        alt={product.seller.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="m-0 mb-1.5">{product.seller.name}</h2>
                        <p className="m-0 mb-1.5 text-gray-600">Age: {product.seller.age}</p>
                        <p className="m-0">{product.seller.bio}</p>
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
                        <span>{showDescription ? "-" : "+"}</span>
                    </div>
                    {showDescription && (
                        <div className="p-4 border border-gray-200 border-t-0">
                            <p>{product.description}</p>
                        </div>
                    )}
                </div>

                <div className="mb-5">
                    <div 
                        className="p-4 border border-gray-200 cursor-pointer flex justify-between items-center"
                        onClick={() => setShowFeatures(!showFeatures)}
                    >
                        <h3 className="m-0">Features</h3>
                        <span>{showFeatures ? "-" : "+"}</span>
                    </div>
                    {showFeatures && (
                        <div className="p-4 border border-gray-200 border-t-0">
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* FAQ Section */}
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
                        {product.faq.map((item, index) => (
                            <div key={index} className="mb-4">
                                <p>Q: {item.question}</p>
                                <p>A: {item.answer}</p>
                            </div>
                        ))}
                        <div className="mt-4">
                            <h4 className="mb-2">Ask a Question</h4>
                            <input
                                type="text"
                                placeholder="Your question"
                                value={newQuestion}
                                onChange={(e) => setNewQuestion(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-200 rounded-lg"
                            />
                            {/* <textarea
                                placeholder="Your answer"
                                value={newAnswer}
                                onChange={(e) => setNewAnswer(e.target.value)}
                                className="w-full p-2 mb-2 border border-gray-200 rounded-lg"
                                rows="4"
                            /> */}
                            <button
                                onClick={handleAddFAQ}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Similar Products Slider */}
            <div className="w-[70vw] mx-auto mb-10">
                <h3 className="text-2xl mb-4">Similar Products</h3>
                <div className="flex overflow-x-auto gap-4">
                    {similarProducts.map((product) => (
                        <div key={product.id} className="flex-shrink-0">
                            <div className="w-[200px] h-[200px]">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <p className="mt-2">{product.name}</p>
                            <p className="text-gray-600">${product.price}</p>
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
                    {summary}
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
                    {product.reviews.global.map((review) => (
                        <div key={review.id} className="p-4 border border-gray-200 rounded-lg mb-2">
                            <div className="flex">
                                {"★".repeat(review.rating)}
                                <span className="text-gray-300">{"★".repeat(5 - review.rating)}</span>
                            </div>
                            <p>{review.text}</p>
                        </div>
                    ))}
                    {product.reviews.local.map((review) => (
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
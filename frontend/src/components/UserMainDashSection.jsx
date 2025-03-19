import React, { useState } from "react";

const UserMainDashSection = () => {
    const [selectedSection, setSelectedSection] = useState("yourOrders");

    // Function to handle section selection
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    // Sample data for Your Orders
    const orders = [
        {
            id: 1,
            image: "https://via.placeholder.com/100",
            name: "Product A",
            status: "Shipped",
            arrivalDate: "Arriving by Oct 25",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100",
            name: "Product B",
            status: "Departed for Delivery",
            arrivalDate: "Arriving by Oct 22",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/100",
            name: "Product C",
            status: "Delivered",
            arrivalDate: "Delivered on Oct 20",
        },
    ];

    // Sample data for Buy Again
    const buyAgainProducts = [
        {
            id: 1,
            image: "https://via.placeholder.com/100",
            name: "Product X",
            price: "$49.99",
            rating: "4.5/5",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/100",
            name: "Product Y",
            price: "$29.99",
            rating: "4.0/5",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/100",
            name: "Product Z",
            price: "$99.99",
            rating: "5.0/5",
        },
    ];

    // Sample data for KARMA
    const karmaStats = {
        peopleHelped: 120,
        moneyUsedForGood: "$1,500",
    };

    return (
        <div className="flex flex-col items-center p-4 w-[75vw] ml-[25vw]">
            {/* Headings Section */}
            <div className="flex justify-between w-full max-w-4xl mb-6 relative">
                {/* Underline for all headings */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-200"></div>

                {/* Your Orders */}
                <div
                    className={`flex-1 text-center py-2 cursor-pointer ${
                        selectedSection === "yourOrders" ? "text-blue-700 font-bold" : "text-gray-500"
                    } transition-all duration-300 relative`}
                    onClick={() => handleSectionClick("yourOrders")}
                >
                    <span className="text-xl">Your Orders</span>
                    {selectedSection === "yourOrders" && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"></div>
                    )}
                </div>

                {/* Buy Again */}
                <div
                    className={`flex-1 text-center py-2 cursor-pointer ${
                        selectedSection === "buyAgain" ? "text-blue-700 font-bold" : "text-gray-500"
                    } transition-all duration-300 relative`}
                    onClick={() => handleSectionClick("buyAgain")}
                >
                    <span className="text-xl">Buy Again</span>
                    {selectedSection === "buyAgain" && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"></div>
                    )}
                </div>

                {/* Your Rewards */}
                <div
                    className={`flex-1 text-center py-2 cursor-pointer ${
                        selectedSection === "yourRewards" ? "text-blue-700 font-bold" : "text-gray-500"
                    } transition-all duration-300 relative`}
                    onClick={() => handleSectionClick("yourRewards")}
                >
                    <span className="text-xl">Your Rewards</span>
                    {selectedSection === "yourRewards" && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"></div>
                    )}
                </div>

                {/* KARMA */}
                <div
                    className={`flex-1 text-center py-2 cursor-pointer ${
                        selectedSection === "karma" ? "text-blue-700 font-bold" : "text-gray-500"
                    } transition-all duration-300 relative`}
                    onClick={() => handleSectionClick("karma")}
                >
                    <span className="text-xl">KARMA</span>
                    {selectedSection === "karma" && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700"></div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-4xl">
                {selectedSection === "yourOrders" && (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="flex items-center p-4 border-2 border-blue-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <img src={order.image} alt={order.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-semibold">{order.name}</h3>
                                    <p className="text-gray-600">{order.status}</p>
                                    <p className="text-sm text-gray-500">{order.arrivalDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedSection === "buyAgain" && (
                    <div className="space-y-4">
                        {buyAgainProducts.map((product) => (
                            <div key={product.id} className="flex items-center p-4 border-2 border-blue-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-gray-600">{product.price}</p>
                                    <p className="text-sm text-gray-500">Rating: {product.rating}</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300">
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {selectedSection === "yourRewards" && (
                    <div className="space-y-6">
                        {/* Redeem Points Section */}
                        <div className="p-6 border-2 border-blue-700 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold">Your Rewards</h2>
                                <p className="text-lg">You have earned 500 points!</p>
                                <button className="mt-4 px-6 py-2 bg-white text-yellow-700 rounded-full font-semibold hover:bg-yellow-100 transition duration-300">
                                    Redeem Now
                                </button>
                            </div>
                        </div>

                        {/* Earn More Points Section */}
                        <div className="p-6 border-2 border-blue-200 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Want to Earn More Points?</h2>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center">
                                    <span>Attend the following campaigns</span>
                                    <span className="text-blue-700 font-semibold">+100 points</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Be a regular buyer</span>
                                    <span className="text-blue-700 font-semibold">+200 points</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Refer a friend</span>
                                    <span className="text-blue-700 font-semibold">+50 points</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {selectedSection === "karma" && (
                    <div className="space-y-6">
                        {/* KARMA Stats Section */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 border-2 border-blue-200 rounded-lg text-center">
                                <h3 className="text-4xl font-bold">{karmaStats.peopleHelped}</h3>
                                <p className="text-gray-600">People Helped</p>
                            </div>
                            <div className="p-6 border-2 border-blue-200 rounded-lg text-center">
                                <h3 className="text-4xl font-bold">{karmaStats.moneyUsedForGood}</h3>
                                <p className="text-gray-600">Used for Good Causes</p>
                            </div>
                        </div>

                        {/* Share KARMA Section */}
                        <div className="p-6 border-2 border-blue-200 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Share Your KARMA</h2>
                            <p className="text-gray-600 mb-4">
                                Share your achievements on social media and earn extra points!
                            </p>
                            <button className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300">
                                Share on Social Media (+50 points)
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserMainDashSection;
import React from "react";
import { FaShoppingCart, FaDollarSign, FaBox, FaChartLine, FaListAlt, FaTruck, FaCreditCard } from "react-icons/fa";

const SellerMainDashSection = () => {
    // Sample data for the top row cards
    const analyticsData = [
        {
            id: 1,
            title: "Total Orders",
            value: "1,234",
            icon: <FaShoppingCart className="text-3xl text-blue-500" />,
            color: "blue",
            graphData: [30, 40, 35, 50, 49, 60, 70], // Sample graph data
        },
        {
            id: 2,
            title: "Total Revenue",
            value: "$12,345",
            icon: <FaDollarSign className="text-3xl text-green-500" />,
            color: "green",
            graphData: [50, 60, 55, 70, 65, 80, 90], // Sample graph data
        },
        {
            id: 3,
            title: "Total Products Sold",
            value: "567",
            icon: <FaBox className="text-3xl text-yellow-500" />,
            color: "yellow",
            graphData: [20, 30, 25, 40, 35, 50, 60], // Sample graph data
        },
    ];

    // Sample data for the bottom row cards
    const summaryData = [
        {
            id: 1,
            title: "Order Summary",
            icon: <FaListAlt className="text-3xl text-yellow-500" />,
            color: "yellow",
            content: "View and manage all your orders in one place.",
        },
        {
            id: 2,
            title: "Review Order (Track Order)",
            icon: <FaTruck className="text-3xl text-green-500" />,
            color: "green",
            content: "Track the status of your orders in real-time.",
        },
        {
            id: 3,
            title: "Payment Summary",
            icon: <FaCreditCard className="text-3xl text-red-500" />,
            color: "red",
            content: "View your payment history and upcoming payments.",
        },
    ];

    return (
        <div className="p-6">
            {/* Top Row: Analytics Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                {analyticsData.map((item) => (
                    <div
                        key={item.id}
                        className="p-6 border-2 rounded-lg flex flex-col items-center justify-center space-y-4"
                        style={{ borderColor: item.color }}
                    >
                        <div className="flex items-center space-x-4">
                            {item.icon}
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-3xl font-bold">{item.value}</p>
                        <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FaChartLine className="text-2xl text-gray-500" />
                            <span className="ml-2">Mini Graph (Expandable)</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Row: Summary Cards */}
            <div className="grid grid-cols-3 gap-6">
                {summaryData.map((item) => (
                    <div
                        key={item.id}
                        className="p-6 border-2 rounded-lg flex flex-col space-y-4"
                        style={{ borderColor: item.color }}
                    >
                        <div className="flex items-center space-x-4">
                            {item.icon}
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.content}</p>
                        <button
                            className="px-4 py-2 bg-white rounded-full border-2 hover:bg-gray-100 transition duration-300"
                            style={{ borderColor: item.color }}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellerMainDashSection;
import React from "react";
import { FaShoppingCart, FaDollarSign, FaBox, FaEllipsisV, FaChevronUp } from "react-icons/fa";

const SellerMainDashSection = () => {
    // Top row analytics cards data
    const analyticsData = [
        {
            id: 1,
            title: "Total Orders",
            value: "400",
            icon: <FaShoppingCart className="text-blue-600" />,
            trend: "+10%",
            trendType: "up",
            graphData: [30, 40, 35, 50, 49, 60, 70],
        },
        {
            id: 2,
            title: "Total Sell",
            value: "₹42.5L",
            icon: <FaDollarSign className="text-blue-600" />,
            trend: "-5%",
            trendType: "down",
            graphData: [50, 60, 55, 70, 65, 45, 40],
        },
        {
            id: 3,
            title: "Total Products",
            value: "452",
            icon: <FaBox className="text-blue-600" />,
            trend: "+23",
            trendType: "up",
            graphData: [20, 30, 25, 40, 35, 50, 60],
        },
    ];

    // Order details data
    const orderStatusData = [
        {
            status: "Pending Orders",
            percentage: "40%",
            count: "160/400 Orders",
            color: "#FFA500" // Orange
        },
        {
            status: "Shipped Orders",
            percentage: "30%",
            count: "120/400 Orders",
            color: "#0047AB" // Dark Blue
        },
        {
            status: "Delivered Orders",
            percentage: "30%",
            count: "120/400 Orders", 
            color: "#28A745" // Green
        }
    ];

    // Review orders data
    const reviewOrdersData = [
        {
            date: "01/02/2025",
            id: "P12345",
            product: "PRODUCT1",
            company: "PharMBk Ltd",
            location: "ALLAHABAD",
            status: "In Transit",
            statusColor: "blue"
        },
        {
            date: "02/02/2025",
            id: "ZM2345",
            product: "PRODUCT2",
            company: "Reliable Remedies",
            location: "AGRA",
            status: "Pending",
            statusColor: "orange"
        },
        {
            date: "24/05/2025",
            id: "PX6789",
            product: "PRODUCT3",
            company: "Corp Inc.",
            location: "MUMBAI",
            status: "Delivered",
            statusColor: "green"
        },
        {
            date: "11/04/2025",
            id: "CC5432",
            product: "PRODUCT4",
            company: "Well Co.",
            location: "JAIPUR",
            status: "Delivered",
            statusColor: "green"
        },
        {
            date: "23/05/2025",
            id: "AH8765",
            product: "PRODUCT5",
            company: "Quick Ltd",
            location: "HARYANA",
            status: "Pending",
            statusColor: "orange"
        }
    ];

    // Payment chart data
    const paymentData = {
        labels: ["1-30 days", "31-60 days", "61-90 days"],
        values: [5500, 5700, 4000],
        max: 6000
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header - Not included in the component but shown in the image */}
            <div className="bg-white shadow-sm mb-4">
                <div className="container mx-auto flex items-center justify-between px-6 py-3">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-amber-500"></span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="font-medium text-blue-800">Analytics</a>
                        <a href="#" className="font-medium text-gray-500">Orders</a>
                        <a href="#" className="font-medium text-gray-500">Promotion</a>
                        <a href="#" className="font-medium text-gray-500">Inbox</a>
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-md flex items-center">
                            <span className="mr-2">+</span>
                            Add New Product
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-4">
                {/* Top Row: Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {analyticsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-6 rounded-lg shadow-sm relative"
                        >
                            <div className="absolute top-4 right-4">
                                <FaEllipsisV className="text-gray-400" />
                            </div>
                            <div className="flex items-center mb-4">
                                <div className="p-2 rounded-md bg-blue-50">
                                    {item.icon}
                                </div>
                                <span className="ml-3 text-gray-700">{item.title}</span>
                            </div>
                            <div className="flex items-end">
                                <h3 className="text-4xl font-bold text-gray-800">{item.value}</h3>
                                <div className={`ml-3 flex items-center text-sm ${item.trendType === "up" ? "text-green-500" : "text-red-500"}`}>
                                    {item.trendType === "up" ? <FaChevronUp className="mr-1" /> : "↓"}
                                    <span>{item.trend} vs last month</span>
                                </div>
                            </div>
                            <div className="mt-4 h-16">
                                <svg width="100%" height="100%" viewBox="0 0 300 60">
                                    <path
                                        d={`M0,50 ${item.graphData.map((value, index) => 
                                            `L${index * 50},${60 - value}`).join(' ')}`}
                                        fill="none"
                                        stroke={item.trendType === "up" ? "#48BB78" : "#F56565"}
                                        strokeWidth="2"
                                    />
                                    {item.graphData.map((value, index) => (
                                        <circle
                                            key={index}
                                            cx={index * 50}
                                            cy={60 - value}
                                            r="4"
                                            fill="white"
                                            stroke={item.trendType === "up" ? "#48BB78" : "#F56565"}
                                            strokeWidth="2"
                                        />
                                    ))}
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Order Summary Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
                        <div className="space-y-6">
                            {orderStatusData.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700">{item.status}</span>
                                        <span className="font-semibold">{item.percentage}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="h-2 rounded-full" 
                                            style={{ 
                                                width: item.percentage, 
                                                backgroundColor: item.color 
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-right text-sm text-gray-500 mt-1">
                                        {item.count}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Summary Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold">Payment Summary</h3>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium">Upcoming</button>
                                <button className="px-3 py-1 bg-white text-sm font-medium">Paid</button>
                            </div>
                        </div>
                        
                        <div className="flex items-end h-48 mt-4 space-x-6 border-b border-gray-200 mb-4">
                            <div className="flex flex-col items-center justify-end h-full w-1/3">
                                <div 
                                    className="w-12 bg-blue-800 rounded-t-md"
                                    style={{ height: `${(paymentData.values[0] / paymentData.max) * 100}%` }}
                                ></div>
                                <span className="mt-2 text-xs text-gray-500">{paymentData.labels[0]}</span>
                            </div>
                            <div className="flex flex-col items-center justify-end h-full w-1/3">
                                <div 
                                    className="w-12 bg-blue-800 rounded-t-md"
                                    style={{ height: `${(paymentData.values[1] / paymentData.max) * 100}%` }}
                                ></div>
                                <span className="mt-2 text-xs text-gray-500">{paymentData.labels[1]}</span>
                            </div>
                            <div className="flex flex-col items-center justify-end h-full w-1/3">
                                <div 
                                    className="w-12 bg-blue-800 rounded-t-md"
                                    style={{ height: `${(paymentData.values[2] / paymentData.max) * 100}%` }}
                                ></div>
                                <span className="mt-2 text-xs text-gray-500">{paymentData.labels[2]}</span>
                            </div>
                        </div>
                        <div className="text-center text-sm text-gray-500">
                            Upcoming
                        </div>
                    </div>

                    {/* Review Orders Card */}
                    <div className="bg-white p-6 rounded-lg shadow-sm relative">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold">Review Orders</h3>
                            <FaEllipsisV className="text-gray-400" />
                        </div>
                        <div className="space-y-4">
                            {reviewOrdersData.map((order, index) => (
                                <div key={index} className="flex justify-between items-center text-sm">
                                    <div>
                                        <div className="text-gray-700">{order.date}</div>
                                        <div className="text-gray-500">{order.id}</div>
                                    </div>
                                    <div>
                                        <div className="font-medium">{order.product}</div>
                                        <div className="text-gray-500">{order.company}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-700 text-right">{order.location}</div>
                                        <div className={`text-right ${
                                            order.status === "Delivered" ? "text-green-500" : 
                                            order.status === "Pending" ? "text-orange-500" : "text-blue-500"
                                        }`}>
                                            {order.status}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerMainDashSection;
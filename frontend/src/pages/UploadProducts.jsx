import React from "react";
import { FaUpload, FaGem } from "react-icons/fa";

const UploadProducts = () => {
    return (
        <div className="mt-[6vh] h-[96vh] p-8 bg-gray-50">
            <div className="flex h-full gap-8">
                {/* Left Section: Product Form */}
                <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Upload New Product</h2>

                    {/* Product Name */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Short Description</label>
                        <textarea
                            rows="2"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter a short description"
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter price"
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="home">Home & Kitchen</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Features */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700">Features</label>
                        <textarea
                            rows="4"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product features"
                        />
                        <div className="absolute bottom-2 right-2 group">
                            <FaGem className="text-2xl text-blue-500 cursor-pointer" />
                            <div className="absolute bottom-8 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Enhance using Gemini
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image Upload */}
                <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
                    {/* Detailed Description */}
                    <div className="mb-6 relative">
                        <label className="block text-sm font-medium text-gray-700">Detailed Description</label>
                        <textarea
                            rows="4"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product description"
                        />
                        <div className="absolute bottom-2 right-2 group">
                            <FaGem className="text-2xl text-blue-500 cursor-pointer" />
                            <div className="absolute bottom-8 right-0 bg-blue-500 text-white text-sm px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Enhance using Gemini
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Upload Images</h2>

                    {/* Main Photo Upload */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Main Photo</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                            <div className="space-y-1 text-center">
                                <FaUpload className="mx-auto text-3xl text-blue-500" />
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Reference Photos Upload */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Reference Photos</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                            <div className="space-y-1 text-center">
                                <FaUpload className="mx-auto text-3xl text-blue-500" />
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>

                    {/* Upload Product Button */}
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Upload Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadProducts;
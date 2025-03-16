import React, { useState } from "react";
import { Link } from "react-router-dom";

const Partner = () => {
  const [showOtherInput, setShowOtherInput] = useState(false); // State to toggle "Others" input
  const [agreed, setAgreed] = useState(false); // State for the checkbox

  return (
    <div className="mt-[6vh] h-screen flex flex-col items-center justify-center bg-gray-100 p-8 pt-0 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">Partner With Us</h1>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left Section (3/5 width) */}
        <div className="w-full md:w-3/5 bg-white p-8 rounded-lg shadow-md">
          {/* Organisation Name, Email, and Contact Number */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Organisation Details</h2>
            <input
              type="text"
              placeholder="Organisation Name"
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
              required
            />
          </div>

          {/* How Can You Help Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">How Can You Help? (Select one or more options)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Fundings/Donations</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Awareness</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Providing Resources</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Volunteering</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>Sponsorship/Partnerships</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  onChange={() => setShowOtherInput(!showOtherInput)}
                />
                <span>Others</span>
              </label>
            </div>
            {showOtherInput && (
              <input
                type="text"
                placeholder="Please specify"
                className="w-full p-3 border text-blue-700 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              />
            )}
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="mt-8">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                required
              />
              <span>
                By clicking, you agree to our{" "}
                <Link to="/terms-and-conditions" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and our{" "}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {/* Join Us Button */}
          <button
            className={`w-full mt-8 py-3 rounded-md text-white font-semibold ${
              agreed ? "bg-blue-800 hover:bg-blue-900" : "bg-blue-400 cursor-not-allowed"
            }`}
            disabled={!agreed}
          >
            Join Us
          </button>
        </div>

        {/* Right Section (2/5 width) */}
        <div className="w-full md:w-2/5 bg-white p-8 rounded-lg shadow-md flex items-center justify-center">
          {/* Placeholder for Image */}
          <div className="text-blue-500 text-center">
            <p>Image or Graphic Placeholder</p>
            <p className="text-sm">(Space for visual content)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
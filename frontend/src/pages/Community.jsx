import React from "react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const communities = [
    {
      title: "Financial Literacy Campaign",
      organization: "The Technical Club of Indian Institute of Information Technology, Allahabad",
      members: "2K Members",
    },
    {
      title: "Financial Literacy Campaign",
      organization: "The Technical Club of Indian Institute of Information Technology, Allahabad",
      members: "2K Members",
    },
    {
      title: "Financial Literacy Campaign",
      organization: "The Technical Club of Indian Institute of Information Technology, Allahabad",
      members: "2K Members",
    },
    {
      title: "Financial Literacy Campaign",
      organization: "The Technical Club of Indian Institute of Information Technology, Allahabad",
      members: "2K Members",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-blue-900">COMMUNITIES TO EXPLORE</h1>
      </div>

      {/* Community Cards */}
      <div className="container mx-auto mt-6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {communities.map((community, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              {/* Background Image */}
              <img
                src="/pics/community.png"
                alt="Community"
                className="w-full h-40 object-cover"
              />
              {/* Money Icon */}
              <div className="absolute top-2 left-2 bg-blue-500 p-2 rounded-full">
                <span className="text-2xl">💰</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-blue-800">{community.title}</h2>
              <p className="text-sm text-gray-700">{community.organization}</p>
              <p className="text-sm text-gray-600">{community.members}</p>

              {/* Profile Button */}
              <Button className="mt-3 w-full bg-blue-600 text-white">
                See Profile →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
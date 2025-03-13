import React, { useState, useEffect } from "react";

const CampProfile = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  // Sample data - replace with actual data
  const campaigns = {
    ongoing: [
      {
        id: 1,
        title: "Summer Education Drive",
        code: "123456",
        location: "New York City, NY",
        start: "2023-07-01",
        end: "2023-08-31",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 40.7128, lng: -74.0060 }
      },
      {
        id: 2,
        title: "Tech for Kids",
        code: "234567",
        location: "San Francisco, CA",
        start: "2023-09-01",
        end: "2023-09-30",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 37.7749, lng: -122.4194 }
      },
      {
        id: 3,
        title: "Health Awareness Week",
        code: "345678",
        location: "Chicago, IL",
        start: "2023-10-01",
        end: "2023-10-07",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 41.8781, lng: -87.6298 }
      }
    ],
    upcoming: [
      {
        id: 4,
        title: "Winter Clothing Collection",
        code: "654321",
        location: "Chicago, IL",
        start: "2023-12-01",
        end: "2023-12-31",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 41.8781, lng: -87.6298 }
      },
      {
        id: 5,
        title: "Holiday Food Drive",
        code: "765432",
        location: "Los Angeles, CA",
        start: "2023-11-15",
        end: "2023-12-15",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      {
        id: 6,
        title: "New Year Marathon",
        code: "876543",
        location: "Miami, FL",
        start: "2024-01-01",
        end: "2024-01-01",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 25.7617, lng: -80.1918 }
      }
    ],
    past: [
      {
        id: 7,
        title: "Spring Food Drive",
        code: "987654",
        location: "Los Angeles, CA",
        start: "2023-03-01",
        end: "2023-04-30",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      {
        id: 8,
        title: "Earth Day Cleanup",
        code: "876543",
        location: "Seattle, WA",
        start: "2023-04-22",
        end: "2023-04-22",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 47.6062, lng: -122.3321 }
      },
      {
        id: 9,
        title: "Back to School Drive",
        code: "765432",
        location: "Boston, MA",
        start: "2023-08-01",
        end: "2023-08-31",
        image: "https://via.placeholder.com/100",
        coordinates: { lat: 42.3601, lng: -71.0589 }
      }
    ]
  };

  const allCampaigns = [...campaigns.ongoing, ...campaigns.upcoming, ...campaigns.past];

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  }, []);

  // Calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Filter campaigns based on selected tab and search query
  const filteredCampaigns = (selectedTab === "all" ? allCampaigns : campaigns[selectedTab])
    .filter((campaign) => {
      if (selectedTab === "nearMe" && userLocation) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          campaign.coordinates.lat,
          campaign.coordinates.lng
        );
        return distance <= 500; // Show campaigns within 500km
      }
      return true;
    })
    .filter((campaign) =>
      campaign.code.includes(searchQuery)
    );

  return (
    <div className="w-[80vw] h-auto border-2 border-blue-700 rounded-lg shadow-sm px-4 py-5 m-10">
      <div className="flex justify-between items-center mb-6 border-b-2 border-blue-100 pb-4">
        <div className="flex gap-8">
          {["all", "ongoing", "upcoming", "past", "nearMe"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-2 px-4 capitalize text-lg font-medium ${
                selectedTab === tab
                  ? "border-b-2 border-blue-600 bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex items-start border rounded-lg p-4 hover:shadow-md transition-shadow">
              <img 
                src={campaign.image}
                alt="Campaign"
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {campaign.title} ({campaign.code})
                </h3>
                <p className="text-gray-600">{campaign.location}</p>
                <p className="text-gray-600">
                  {new Date(campaign.start).toLocaleDateString()} - {new Date(campaign.end).toLocaleDateString()}
                </p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 py-6">
            No campaigns found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CampProfile;

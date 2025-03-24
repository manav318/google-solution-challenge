import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CampProfile = () => {
  const navigate = useNavigate();
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
        image: "pics/campaign.png",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        mode: "In-Person",
        ageRestriction: "16+",
        description: "Join us for a summer of educational activities and mentoring.",
        venue: {
          name: "Central Community Center",
          address: "123 Education Ave, New York City, NY"
        },
        schedule: [
          {
            day: "Week 1",
            events: [
              { time: "09:00 - 12:00", title: "Morning Teaching Sessions" },
              { time: "14:00 - 16:00", title: "Afternoon Activities" }
            ]
          }
        ],
        sponsors: [
          { name: "EduTech", logo: "/edutech-logo.png" },
          { name: "Learning Foundation", logo: "/learning-logo.png" }
        ]
      },
      {
        id: 2,
        title: "Tech for Kids",
        code: "234567",
        location: "San Francisco, CA",
        start: "2023-09-01",
        end: "2023-09-30",
        image: "pics/campaign.png",
        coordinates: { lat: 37.7749, lng: -122.4194 },
        mode: "Hybrid",
        ageRestriction: "12+",
        description: "Teaching technology to underprivileged kids",
        venue: {
          name: "SF Tech Hub",
          address: "456 Tech Street, San Francisco, CA"
        },
        schedule: [
          {
            day: "Monday to Friday",
            events: [
              { time: "10:00 - 12:00", title: "Coding Basics" },
              { time: "14:00 - 16:00", title: "Hands-on Projects" }
            ]
          }
        ],
        sponsors: [
          { name: "TechCorp", logo: "/techcorp-logo.png" },
          { name: "KidsFirst", logo: "/kidsfirst-logo.png" }
        ]
      },
      {
        id: 3,
        title: "Health Awareness Week",
        code: "345678",
        location: "Chicago, IL",
        start: "2023-10-01",
        end: "2023-10-07",
        image: "pics/campaign.png",
        coordinates: { lat: 41.8781, lng: -87.6298 },
        mode: "In-Person",
        ageRestriction: "All Ages",
        description: "Promoting community health and wellness",
        venue: {
          name: "Chicago Community Center",
          address: "789 Health Ave, Chicago, IL"
        },
        schedule: [
          {
            day: "Day 1-2",
            events: [
              { time: "09:00 - 17:00", title: "Health Screenings" },
              { time: "14:00 - 16:00", title: "Wellness Workshops" }
            ]
          }
        ],
        sponsors: [
          { name: "HealthCare Plus", logo: "/healthcare-logo.png" },
          { name: "Wellness Foundation", logo: "/wellness-logo.png" }
        ]
      },
      {
        id: 4,
        title: "New Delhi Education Drive",
        code: "987654",
        location: "New Delhi, India",
        start: "2023-10-01",
        end: "ongoing",
        image: "pics/campaign.png",
        coordinates: { lat: 28.6139, lng: 77.2090 }
      }
    ],
    upcoming: [
      {
        id: 10, // Changed from 4 to 10 to ensure unique IDs
        title: "Winter Clothing Collection",
        code: "654321",
        location: "Chicago, IL",
        start: "2023-12-01",
        end: "2023-12-31",
        image: "pics/campaign.png",
        coordinates: { lat: 41.8781, lng: -87.6298 },
        mode: "In-Person",
        ageRestriction: "All Ages",
        description: "Winter clothing drive for those in need",
        venue: {
          name: "Chicago Winter Relief Center",
          address: "321 Winter St, Chicago, IL"
        },
        schedule: [
          {
            day: "Week 1-4",
            events: [
              { time: "09:00 - 17:00", title: "Donation Collection" },
              { time: "14:00 - 16:00", title: "Distribution" }
            ]
          }
        ],
        sponsors: [
          { name: "WarmHearts", logo: "/warmhearts-logo.png" },
          { name: "Community First", logo: "/community-logo.png" }
        ]
      },
      {
        id: 5,
        title: "Holiday Food Drive",
        code: "765432",
        location: "Los Angeles, CA",
        start: "2023-11-15",
        end: "2023-12-15",
        image: "pics/campaign.png",
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      {
        id: 6,
        title: "New Year Marathon",
        code: "876543",
        location: "Miami, FL",
        start: "2024-01-01",
        end: "2024-01-01",
        image: "pics/campaign.png",
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
        image: "pics/campaign.png",
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      {
        id: 8,
        title: "Earth Day Cleanup",
        code: "876543",
        location: "Seattle, WA",
        start: "2023-04-22",
        end: "2023-04-22",
        image: "pics/campaign.png",
        coordinates: { lat: 47.6062, lng: -122.3321 }
      },
      {
        id: 9,
        title: "Back to School Drive",
        code: "765432",
        location: "Boston, MA",
        start: "2023-08-01",
        end: "2023-08-31",
        image: "pics/campaign.png",
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

  const handleExploreClick = (campaign) => {
    // Pass the entire campaign object instead of just the code
    navigate(`/campaign/${campaign.code}`, { state: { campaignData: campaign } });
  };

  const campaignsToFilter = (selectedTab === "all" || selectedTab === "nearMe")
    ? allCampaigns
    : campaigns[selectedTab];

  // Filter campaigns based on selected tab and search query
  const filteredCampaigns = campaignsToFilter
    .filter((campaign) => {
      if (selectedTab === "nearMe" && userLocation) {
        const distance = calculateDistance(
          userLocation.lat,
          userLocation.lng,
          campaign.coordinates.lat,
          campaign.coordinates.lng
        );
        return distance <= 1000; // Show campaigns within 1000km
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
                  ? "border-b-2 border-blue-600  text-blue-700"
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
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => handleExploreClick(campaign)} key={campaign.code}
                >
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

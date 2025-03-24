import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const ExploreCampaigns = () => {
  const { campcode } = useParams();
  const location = useLocation();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const campaignData = location.state?.campaignData;
    if (campaignData) {
      setCampaign({
        name: campaignData.title,
        code: campaignData.code,
        date: `${new Date(campaignData.start).toLocaleDateString()} - ${new Date(campaignData.end).toLocaleDateString()}`,
        mode: campaignData.mode,
        ageRestriction: campaignData.ageRestriction,
        location: {
          name: campaignData.venue?.name || "",
          address: campaignData.venue?.address || campaignData.location,
          coordinates: campaignData.coordinates
        },
        schedule: campaignData.schedule || [],
        sponsors: campaignData.sponsors || [],
        description: campaignData.description
      });
    }
  }, [location.state]);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!campaign || !campaign.location?.coordinates) return; // Add null check

      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_googleMapsApiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          initMap();
        };
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!campaign || !campaign.location?.coordinates) return; // Add null check

      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: campaign.location.coordinates,
        zoom: 15,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      new window.google.maps.Marker({
        position: campaign.location.coordinates,
        map: map,
        title: campaign.location.name || ''
      });
    };

    loadGoogleMaps();
  }, [campaign]); // Keep campaign as dependency

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[6vh] px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-between w-full mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{campaign.name}</h1>
        <h2 className="text-lg text-gray-600">
          Campaign Code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{campaign.code}</span>
        </h2>
      </div>

      {/* Details and Map Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
        <div className="w-full lg:w-[50%] bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Date</h3>
              <p className="text-lg text-gray-800">{campaign.date}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Mode</h3>
              <p className="text-lg text-gray-800 capitalize">{campaign.mode.toLowerCase()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Age Restriction</h3>
              <p className="text-lg text-gray-800">{campaign.ageRestriction}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p className="text-lg text-gray-800">{campaign.location.name}</p>
              <p className="text-gray-600">{campaign.location.address}</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] h-[400px] bg-white rounded-xl shadow-md overflow-hidden">
          <div id="map" className="h-full w-full"></div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Event Schedule</h2>
        <div className="space-y-8">
          {campaign.schedule.map((day, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium text-gray-700 mb-4">{day.day}</h3>
              <div className="border-l-2 border-green-500 pl-4 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="relative pl-6">
                    <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-green-500"></div>
                    <p className="text-gray-500">{event.time}</p>
                    <p className="text-lg text-gray-800 font-medium">{event.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {campaign.sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                <span className="text-gray-400 text-xs text-center">{sponsor.name} Logo</span>
              </div>
              <p className="text-gray-700 font-medium">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default ExploreCampaigns;
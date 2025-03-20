import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    width: '76vw',
    height: '60vh' // Adjusted height
  };

  const locations = [
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 51.5074, lng: -0.1278 },  // London
    { lat: 35.6762, lng: 139.6503 }, // Tokyo
    { lat: -33.8688, lng: 151.2093 }, // Sydney
    { lat: 48.8566, lng: 2.3522 },   // Paris
    { lat: -22.9068, lng: -43.1729 }, // Rio
    { lat: 31.2304, lng: 121.4737 }, // Shanghai
    { lat: 25.2048, lng: 55.2708 },  // Dubai
    { lat: 19.4326, lng: -99.1332 }, // Mexico City
    { lat: 55.7558, lng: 37.6173 },  // Moscow
  ];

  const defaultCenter = {
    lat: 0,
    lng: 0
  };

  return (
    <div className="shadow-2xl rounded-sm overflow-hidden">
      <LoadScript googleMapsApiKey="VITE_apiKey">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}
        >
          {/* Render markers for each location */}
          {locations.map((location, index) => (
            <Marker
              key={index} // Unique key for each marker
              position={location} // Marker position
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
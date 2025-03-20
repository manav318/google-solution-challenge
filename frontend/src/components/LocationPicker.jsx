import React, { useEffect, useRef, useState } from 'react';

const LocationPicker = ({ onLocationSelect, onClose }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default location
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=VITE_apiKeyI&libraries=places`;
    script.async = true; // Load the script asynchronously
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!scriptLoaded) return; // Wait for the script to load

    const google = window.google;

    const mapInstance = new google.maps.Map(mapRef.current, {
      center: selectedLocation, // Use selectedLocation as the initial center
      zoom: 12,
    });

    const markerInstance = new google.maps.Marker({
      position: selectedLocation, // Use selectedLocation as the initial position
      map: mapInstance,
      draggable: true, // Allow the marker to be dragged
    });

    setMap(mapInstance);
    setMarker(markerInstance);

    // Add click listener to the map
    mapInstance.addListener('click', (event) => {
      const location = event.latLng;
      setSelectedLocation({ lat: location.lat(), lng: location.lng() });
      onLocationSelect({ lat: location.lat(), lng: location.lng() });
    });

    // Add dragend listener to the marker
    markerInstance.addListener('dragend', (event) => {
      const location = event.latLng;
      setSelectedLocation({ lat: location.lat(), lng: location.lng() });
      onLocationSelect({ lat: location.lat(), lng: location.lng() });
    });
  }, [scriptLoaded]); // Initialize map and marker only once

  // Update marker position when selectedLocation changes
  useEffect(() => {
    if (marker) {
      marker.setPosition(selectedLocation);
    }
  }, [selectedLocation, marker]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-[80vw] h-[80vh] relative">
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div ref={mapRef} className="h-[90%] w-full"></div>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Select Location
        </button>
      </div>
    </div>
  );
};

export default LocationPicker;
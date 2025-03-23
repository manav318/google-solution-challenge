"use client";
import React from "react";
import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map"; // Import the custom WorldMap component

const Map = () => {
  const locations = [
    { lat: 40.7128, lng: -74.006 }, // New York
    { lat: 51.5074, lng: -0.1278 }, // London
    { lat: 35.6762, lng: 139.6503 }, // Tokyo
    { lat: -33.8688, lng: 151.2093 }, // Sydney
    { lat: 48.8566, lng: 2.3522 }, // Paris
    { lat: -22.9068, lng: -43.1729 }, // Rio
    { lat: 31.2304, lng: 121.4737 }, // Shanghai
    { lat: 25.2048, lng: 55.2708 }, // Dubai
    { lat: 19.4326, lng: -99.1332 }, // Mexico City
    { lat: 55.7558, lng: 37.6173 }, // Moscow
    { lat: 14.6139, lng: 77.2090 } //New Delhi
  ];

  // Convert locations to the format required by the WorldMap component
  const dots = locations.map((location, index) => ({
    start: location,
    end: locations[(index + 1) % locations.length], // Connect to the next location
  }));

  return (
    <div className="py-[1vh] bg-black w-[72vw] h-[70vh] mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white">
          A World{" "}
          <span className="text-neutral-400">
            {"Connected".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
      </div>
      <div className="shadow-2xl rounded-sm overflow-hidden max-w-7xl mx-auto h-full">
        <WorldMap dots={dots} />
      </div>
    </div>
  );
};

export default Map;
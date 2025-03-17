import React, { useState, useEffect } from "react";

const WomenSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0); // Delayed background update

  const images = [
    {
      url: "pics/women1.jpg",
      gradient: "linear-gradient(90deg, #0A2647, #144272, #2C5364, #2C5364)",
    },
    {
      url: "pics/women2.jpg",
      gradient: "linear-gradient(90deg, #C6EBC5, #A1C4FD, #708090, #FFFFFF)",
    },
    {
      url: "pics/women3.jpg",
      gradient: "linear-gradient(90deg, #FF0000, #8B4513, #2E8B57, #11111F)",
    },
    {
      url: "pics/women4.jpg",
      gradient: "linear-gradient(90deg, #1E90FF, #8B4513, #FFFFFF, #FFFFFF)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex); // Store previous image index for smooth fade
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Delay the background transition by 1 second
      setTimeout(() => {
        setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="flex h-[25vh] w-[90vw] mx-auto relative overflow-hidden rounded-xl shadow-md">
      {/* Smooth Background Transition */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {/* Previous Background (Fading Out) */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-[5000ms] ease-in-out"
          style={{
            background: images[prevImageIndex].gradient,
            opacity: 0, // Fades out smoothly
          }}
        />
        {/* Delayed Background (Fading In after 1 sec) */}
        <div
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-[5000ms] ease-in-out"
          style={{
            background: images[bgImageIndex].gradient,
            opacity: 1, // Fades in smoothly after 1 sec delay
          }}
        />
      </div>

      {/* Text Section */}
      <div className="flex-[2] flex items-center justify-center text-white text-4xl font-bold p-5 z-20 text-shadow">
        <p>For Women, By Women</p>
      </div>

      {/* Image Slider */}
      <div className="w-[25vh] h-[25vh] relative overflow-hidden z-20">
        <div
          className="flex transition-transform duration-[6000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${(currentImageIndex / images.length) * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center bg-white/30"
              style={{
                width: `${100 / images.length}%`,
              }}
            >
              <img
                src={image.url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenSection;

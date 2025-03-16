import React, { useState, useEffect } from "react";

const WomenSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [brightDots, setBrightDots] = useState([]);

  // Array of images with corresponding pastel gradient backgrounds
  const images = [
    {
      url: "pics/women1.jpg", // Image path
      gradient: "linear-gradient(135deg, #A8D8EA, #FF9AA2, #FFDAC1)", // Pastel Blue, Pink, Peach
    },
    {
      url: "pics/women2.jpg", // Image path
      gradient: "linear-gradient(135deg, #B5EAD7, #C7CEEA, #E2F0CB)", // Pastel Green, Lavender, Mint
    },
    {
      url: "pics/women3.jpg", // Image path
      gradient: "linear-gradient(135deg, #FFB7B2, #FFDAC1, #E2F0CB)", // Pastel Coral, Peach, Mint
    },
    {
      url: "pics/women4.jpg", // Image path
      gradient: "linear-gradient(135deg, #C7CEEA, #FF9AA2, #B5EAD7)", // Pastel Lavender, Pink, Green
    },
  ];

  // Function to shuffle images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Function to randomly brighten dots
  useEffect(() => {
    const dotInterval = setInterval(() => {
      const randomDots = Array.from({ length: 20 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }));
      setBrightDots(randomDots);
    }, 1000); // Change dot brightness every second

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div
      className="women-section"
      style={{
        height: "40vh",
        width: "80%", // Reduced width
        margin: "0 auto", // Center the div
        display: "flex",
        background: images[currentImageIndex].gradient,
        transition: "background 1.5s ease", // Smooth background transition
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px", // Rounded corners
      }}
    >
      {/* Matrix-like Dots Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px", // Grid of dots
          zIndex: 0, // Ensure dots are behind the content
        }}
      >
        {/* Randomly brightened dots */}
        {brightDots.map((dot, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: dot.top,
              left: dot.left,
              width: "4px",
              height: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "50%",
              opacity: dot.opacity,
              transition: "opacity 0.5s ease", // Smooth dot brightness transition
            }}
          />
        ))}
      </div>

      {/* Uniform Blur on Entire Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(8px)", // Uniform blur effect
          zIndex: 1, // Ensure blur is behind the content
        }}
      />

      {/* Text Section (2/3rd of the width) */}
      <div
        className="text-section"
        style={{
          flex: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: "bold",
          padding: "20px",
          zIndex: 2, // Ensure text is above the blur effect
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add shadow for better readability
        }}
      >
        <p>For Women, By Women</p>
      </div>

      {/* Image Section (1/3rd of the width) */}
      <div
        className="image-section"
        style={{
          flex: "1",
          position: "relative",
          overflow: "hidden",
          zIndex: 2, // Ensure image is above the blur effect
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${images.length * 100}%`, // Total width of all images
            transform: `translateX(-${(currentImageIndex / images.length) * 100}%)`, // Slide horizontally
            transition: "transform 1.5s ease", // Smooth slide transition
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: `${100 / images.length}%`, // Each image takes equal width
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.3)", // Background color for empty space
              }}
            >
              <img
                src={image.url}
                alt={`Slide ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensure the image fits without cropping
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
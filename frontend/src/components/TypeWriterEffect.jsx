"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterEffectSmoothDemo() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
  const sentences = [
    [{ text: "GENUITY", className: "text-white dark:text-gray-500" }],
    [
      { text: "Hope, " },
      { text: "Help, " },
      { text: "and " },
      { text: "a " },
      { text: "Future " },
      { text: "for " },
      { text: "All!", className: "text-white dark:text-gray-500" }
    ],
    [
      { text: "Equality " },
      { text: "Empowers, " },
      { text: "Poverty " },
      { text: "Disappears!", className: "text-white dark:text-gray-500" }
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 4000); // Change sentence every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth 
        key={currentSentenceIndex} // Add this line to force remount
        words={sentences[currentSentenceIndex]}
        cursorStyle="_"
      />
    </div>
  );
}
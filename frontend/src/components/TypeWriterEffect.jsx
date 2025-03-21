"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterEffectSmoothDemo() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const sentences = [
    [{ text: "GENUITY", className: "text-yellow-500 dark:text-gray-300 font-roboto-mono text-7xl" }],
    [
      { text: "Hope", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "Help ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "and ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "a ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "Future ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "for ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "All.", className: "text-yellow-500 dark:text-yellow-400 font-roboto-mono text-6xl" }
    ],
    [
      { text: "Equality ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "Empowers ", className: "text-yellow-500 dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "Poverty ", className: "text-white dark:text-gray-300 font-roboto-mono text-6xl" },
      { text: "Disappears.", className: "text-white dark:text-yellow-400 font-roboto-mono text-6xl" }
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 5000); // Change sentence every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth
        key={currentSentenceIndex} // Force remount on sentence change
        words={sentences[currentSentenceIndex]}
        cursorStyle="_"
        className="font-roboto-mono tracking-wider" // Added tracking-wider for increased letter spacing
      />
    </div>
  );
}
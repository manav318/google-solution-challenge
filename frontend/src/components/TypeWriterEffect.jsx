"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useState, useEffect } from "react";

export function TypewriterEffectSmoothDemo() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const sentences = [
    [{ text: "GENUITY", className: "text-yellow-500 dark:text-gray-300 font-roboto-mono text-[4vh] md:text-[5vh] lg:text-[7vh]" }],
    [
      { text: "Hope", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "Help ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "and ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "a ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "Future ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "for ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "All.", className: "text-yellow-500 dark:text-yellow-400 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" }
    ],
    [
      { text: "Equality ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "Empowers ", className: "text-yellow-500 dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "Poverty ", className: "text-white dark:text-gray-300 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" },
      { text: "Disappears.", className: "text-white dark:text-yellow-400 font-roboto-mono text-[3vh] md:text-[4vh] lg:text-[6vh]" }
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
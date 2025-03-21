"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BackgroundBeams } from "./ui/background-beams";

export function HeroHighlightDemo() {
  const words2 = [
    { text: "Hope," },
    { text: "Help," },
    { text: "and" },
    { text: "a" },
    { text: "Future" },
    { text: "for" },
    { text: "All!", className: "text-yellow-500" },
  ];
  const words3 = [
    { text: "Equality" },
    { text: "Empowers," },
    { text: "Poverty" },
    { text: "Disappears!", className: "text-yellow-500" },
  ];

  return (
    <div className="h-[100vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center overflow-hidden">
      <BackgroundBeams className="z-0" />
      <div className="relative z-20 max-w-2xl mx-auto p-4">
        <div className="flex flex-col gap-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-5xl font-bold"
            >
              <span className="text-yellow-500">GENUITY</span>
            </motion.h1>

            <TypewriterEffectSmooth
              words={words2}
              className="mb-8 text-3xl font-bold"
              cursorClassName="bg-white"
            />
            <TypewriterEffectSmooth
              words={words3}
              className="text-2xl font-bold"
              cursorClassName="bg-green-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
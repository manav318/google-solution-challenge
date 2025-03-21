"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function HeroHighlightDemo() {
  const words1 = [
    {
      text: "GENUITY",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];

  const words2 = [
    {
      text: "Hope,",
    },
    {
      text: "Help,",
    },
    {
      text: "and",
    },
    {
      text: "a",
    },
    {
      text: "Future",
    },
    {
      text: "for",
    },
    {
      text: "All!",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];

  const words3 = [
    {
      text: "Equality",
    },
    {
      text: "Empowers,",
    },
    {
      text: "Poverty",
    },
    {
      text: "Disappears!",
      className: "text-yellow-500 dark:text-yellow-500",
    },
  ];

  return (
    <HeroHighlight>
      <div className="flex flex-col gap-6 text-center">
        <TypewriterEffectSmooth words={words1} />
        <TypewriterEffectSmooth words={words2} />
        <TypewriterEffectSmooth words={words3} />
      </div>
    </HeroHighlight>
  );
}

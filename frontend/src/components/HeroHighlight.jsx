"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function HeroHighlightDemo() {
  

  return (
    <HeroHighlight>
      <div className="flex flex-col gap-6 text-center">
      </div>
    </HeroHighlight>
  );
}
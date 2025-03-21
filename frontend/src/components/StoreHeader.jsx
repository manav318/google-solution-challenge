"use client";
import { TypewriterEffectSmoothDemo } from "./TypeWriterEffect";
import { HeroHighlight } from "./ui/hero-highlight";

const WomenSection = () => {
  return (
    <HeroHighlight containerClassName="rounded-xl mx-auto w-[90vw]">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <TypewriterEffectSmoothDemo />
      </div>
    </HeroHighlight>
  );
};

export default WomenSection;
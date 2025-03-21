"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BackgroundBeams } from "./ui/background-beams";

export function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "Build" },
    { text: "awesome" },
    { text: "apps" },
    { text: "with" },
    { text: "Aceternity.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] relative">
      <BackgroundBeams className="z-0" />
      <div className="relative z-20">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
          The road to freedom starts from here
        </p>
        <TypewriterEffectSmooth
          words={words}
          className="text-2xl font-bold text-white"
          cursorClassName="bg-blue-500"
        />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
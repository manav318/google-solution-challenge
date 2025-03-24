"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const InfiniteMovingCards = ({
  items = testimonials,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div className="text-center mt-[3vh] ,mb-[5vh]">
    <h2 className="text-[4vw] font-bold text-gray-800 dark:text-white font-['Roboto']">
      What Our Customers Have to Say
    </h2>
    <div
      ref={containerRef}
      className={cn(
        "mt-[8vh] scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent_2%,white_0%,white_100%,transparent_2%)]",
        className
      )}
    >
  


<ul
  ref={scrollerRef}
  className={cn(
    "flex w-max min-w-full shrink-0 flex-nowrap gap-[2vw] py-[3vh]", // Adjusted gap and padding with vw/vh
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {(items || testimonials).map((item, idx) => (
    <li
      className="relative w-[50vw] max-w-full shrink-0 rounded-3xl border border-b-0 border-blue-500 
      bg-gradient-to-b from-blue-200 to-blue-600 px-[3vw] py-[4vh] md:w-[40vw] md:py-[3vh] dark:border-blue-400"
      key={`${item.name}-${idx}`}
    >
      <blockquote className="relative h-full flex flex-col justify-between">
        <p className="text-[1.5vw] leading-relaxed text-black"> 
          {item.quote}
        </p>
        <div className="mt-[2vh] flex flex-row items-center">
          <span className="flex flex-col gap-[0.5vh]">
            <span className="text-[1.2vw] font-medium leading-none text-black">
              {item.name}
            </span>
            <span className="text-[1vw] leading-none text-gray-600">
              {item.title}
            </span>
          </span>
        </div>
      </blockquote>
    </li>
  ))}
</ul>

      </div>
    </div>
  );
};

export const InfiniteMovingCardsDemo = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
};

// Add default export
export default InfiniteMovingCardsDemo;

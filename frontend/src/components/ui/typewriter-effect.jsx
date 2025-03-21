"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <div className="flex">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="flex">
              {word.text.map((char, index) => (
                <motion.span 
                  key={`char-${index}`} 
                  className={cn("opacity-0", word.className)}
                >
                  {char}
                </motion.span>
              ))}
              {/* Add space after each word except the last one */}
              {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div ref={scope} className={cn("text-base font-bold", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 bg-transparent", cursorClassName)}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div className="flex">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="flex">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * index,
                    ease: "easeInOut",
                  }}
                  key={`char-${index}`}
                  className={cn(word.className)}
                >
                  {char}
                </motion.span>
              ))}
              {/* Add space after each word except the last one */}
              {idx < wordsArray.length - 1 && <span>&nbsp;&nbsp;</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("text-base font-bold", className)}>
      <div className="flex">
        {renderWords()}{" "}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 bg-transparent", cursorClassName)}
      />
    </div>
  );
};
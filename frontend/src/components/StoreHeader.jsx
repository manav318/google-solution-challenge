import React, { useState, useEffect } from "react";
import { HeroHighlight } from "./ui/hero-highlight";

const WomenSection = () => {
  
  return (
    <div className="flex h-[30vh] w-[90vw] mx-auto relative overflow-hidden rounded-xl shadow-md">
      <HeroHighlight/>
    </div>
  );
};

export default WomenSection;

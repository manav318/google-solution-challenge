import { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

export default function AutoMovingSlider() {
  const rowRefs = [useRef(null), useRef(null), useRef(null)];
  const scrollSpeeds = [30, 40, 35]; // Adjust speeds for different rows

  const companyLists = [
    ["Google", "Microsoft", "Amazon", "Apple", "Tesla"],
    ["Meta", "Netflix", "IBM", "Intel", "Samsung"],
    ["Sony", "Adobe", "Nvidia", "Oracle", "Cisco"],
  ];

  useEffect(() => {
    rowRefs.forEach((rowRef, index) => {
      if (rowRef.current) {
        const row = rowRef.current;
        const clonedContent = row.innerHTML;
        row.innerHTML += clonedContent; // Duplicate for seamless looping
      }
    });
  }, []);

  return (
    <div className="w-full space-y-0  mt-16 border-t-2 border-black">
      {rowRefs.map((rowRef, rowIndex) => (
        <div key={rowIndex} className="relative overflow-hidden border-b-2 border-black">
          <div
            ref={rowRef}
            className="flex space-x-10 whitespace-nowrap"
            style={{
              animation: `scroll-left-${rowIndex} ${scrollSpeeds[rowIndex]}s linear infinite`,
            }}
          >
            {[...companyLists[rowIndex], ...companyLists[rowIndex]].map((company, index) => (
              <div
                key={index}
                className={`text-7xl font-serif p-3 font-normal min-w-[400px] text-center ${
                  index % 2 === 0 ? "text-black" : "text-blue-500"
                }`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>
        {`
          @keyframes scroll-left-0 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-left-1 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-left-2 {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
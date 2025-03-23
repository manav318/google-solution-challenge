import React, { useState, useEffect } from "react";

const Card = () => {
  // State to manage the displayed numbers for each section
  const [numbers, setNumbers] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]);

  // Final values for each section
  const finalValues = [1234, 10, 912];

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        return prevNumbers.map(section => {
          return section.map(() => Math.floor(Math.random() * 10));
        });
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setNumbers(finalValues.map(value => 
        String(value).split("").map(Number)
      ));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[29vw] ml-[0.1vh] p-0 dark:bg-black bg-white">
      {["PAST CAMPAIGNS", "ONGOING CAMPAIGNS", "UPCOMING CAMPAIGNS"].map(
        (title, index) => (
          <div
            key={index}
            className="w-full h-[24.75vh] mb-[0.1vh] text-white font-semibold text-xl bg-gray-900 relative"
          >
            <h2 className="font-led text-2xl absolute top-[2vh] left-[1vw]">{title}</h2>
            <div className="text-7xl text-sky-500 absolute bottom-[4vh] right-[2vw] flex space-x-2 font-dotgothic">
              {numbers[index].map((digit, i) => (
                <div
                  key={i}
                  className="inline-block w-[4vw] text-center overflow-hidden"
                >
                  <div className="animate-topple">
                    {digit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
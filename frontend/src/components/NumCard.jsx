import React, { useState, useEffect } from "react";

const Card = () => {
  // State to manage the displayed number
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);

  // Final value for the number
  const finalValue = 1234;

  // Function to update the numbers with a toppling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        for (let i = 0; i < newNumbers.length; i++) {
          // Randomize the digits for the toppling effect
          newNumbers[i] = Math.floor(Math.random() * 10);
        }
        return newNumbers;
      });
    }, 100); // Adjust the interval for faster/slower toppling

    // Stop the toppling effect and set the final value after a delay
    setTimeout(() => {
      clearInterval(interval);
      setNumbers(String(finalValue).split("").map(Number));
    }, 4000); // Adjust the delay for how long the toppling lasts

    return () => clearInterval(interval);
  }, [finalValue]);

  return (
    <div className="w-[29vw] ml-[0.1vh] p-0 dark:bg-black bg-white">
      {["PAST CAMPAIGNS", "ONGOING CAMPAIGNS", "UPCOMING CAMPAIGNS"].map(
        (title, index) => (
          <div
            key={index}
            className="w-full h-[24.75vh] mb-[0.1vh] text-white font-semibold text-xl bg-gray-900 relative"
          >
            {/* Title */}
            <h2 className="font-led text-2xl absolute top-[2vh] left-[1vw]">{title}</h2>

            {/* Toppling Numbers */}
            <div className="text-7xl text-sky-500 absolute bottom-[4vh] right-[2vw] flex space-x-2">
              {numbers.map((digit, i) => (
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
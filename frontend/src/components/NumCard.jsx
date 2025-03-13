import React from "react";

const Card = () => {
    return (
        <div className="w-[23.4vw] ml-1 p-0">
            {["PAST CAMPAIGNS", "ONGOING CAMPAIGNS", "UPCOMING CAMPAIGNS"].map((title, index) => (
                <div key={index} className="w-full h-[20vh] mb-[0.1vh] text-white font-semibold text-xl bg-blue-700 flex flex-col items-center justify-center gap-1">
                    <h2>{title}</h2>
                    <h3>1010</h3>
                </div>
            ))}
        </div>
    );
};

export default Card;

import React, { useState, useEffect, useRef } from "react";

const Count = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showNumber, setShowNumber] = useState(false);
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Delay fade-in effect for number
                    setTimeout(() => {
                        setShowNumber(true);
                    }, 8000); // 8 second delay
                } else {
                    setIsVisible(false);
                    setShowNumber(false); // Reset when out of view
                }

                // Play or pause video based on visibility
                if (entry.isIntersecting && videoRef.current) {
                    videoRef.current.play();
                } else if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (  
        <div 
            ref={sectionRef}
            className="w-screen h-[500px] bg-slate-300 mt-10 relative flex justify-center items-center overflow-hidden"
        >
            <video 
                ref={videoRef}
                autoPlay={false} // Prevent autoplay before visible
                loop 
                muted 
                className="absolute h-[1705px] w-[500px] object-cover transform -rotate-90"
            >
                <source src="/videos/wave_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Text Content */}
            <div className="relative z-10 text-white text-center flex flex-col items-center justify-between h-full py-5">
                {/* Top Text */}
                <p className={`font-serif text-5xl font-bold transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    You! Have Helped Uplift
                </p>

                {/* Number with delayed fade-in */}
                <div 
                    className={`text-[200px] font-black tracking-[0.2em]  transition-opacity duration-1000 ${showNumber ? "opacity-100" : "opacity-0"}`}
                >
                    42069
                </div>

                {/* Bottom Text */}
                <p className={`font-serif text-4xl font-semibold transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    People from Poverty*
                </p>
            </div>
        </div>
    );
}

export default Count;

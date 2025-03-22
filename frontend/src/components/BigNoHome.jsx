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
                    }, 2000); // 2 second delay

                    // Play video
                    if (videoRef.current) {
                        videoRef.current.play();
                    }
                } else {
                    setIsVisible(false);
                    setShowNumber(false); // Reset when out of view

                    // Pause video
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.8 } // Trigger when 80% of the section is in view
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
            className="w-screen h-[68.5vh] bg-slate-300 mt-[5vh] relative flex justify-center items-center overflow-hidden"
        >
            <video
                ref={videoRef}
                autoPlay={false} // Prevent autoplay before visible
                loop
                muted
                preload="auto" // Preload video
                className="absolute h-[100vw] w-[68.5vh] object-cover mx-auto transform -rotate-90"
                style={{ transform: 'rotate(-90deg) translate3d(0, 0, 0)' }} // Force hardware acceleration
            >
                <source src="/videos/wave_vid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Text Content */}
            <div className="relative z-10 text-white text-center flex flex-col items-center justify-between h-full py-[5vh]">
                {/* Top Text */}
                <p className={`font-serif text-[5vh] font-bold transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    You! Have Helped Uplift
                </p>

                {/* Number with delayed fade-in */}
                <div
                    className={`text-[20vh] font-black tracking-[0.2em] transition-opacity duration-1000 ${showNumber ? "opacity-100" : "opacity-0"}`}
                >
                    42069
                </div>

                {/* Bottom Text */}
                <p className={`font-serif text-[4vh] font-semibold transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    People from Poverty*
                </p>
            </div>
        </div>
    );
}

export default Count;
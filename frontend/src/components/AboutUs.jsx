import React from "react";

const About = () => {
    return (
        <div className="w-screen bg-gradient-custom m-0 h-[89.8vh]">
            <div className="flex h-full">
                <div className="w-[57.8vw] h-full pl-[1vw]">
                    <div className="text-white text-6xl font-playfair p-[3vh] pl-[20vw] font-bold mb-[3vh]">
                        ABOUT US
                    </div>
                    <div>
                        <div className="text-white font-titan text-4xl p-[3vh] w-full mb-[2vh]">
                            <span className="uppercase text-5xl font-extrabold tracking-wide">
                                our vision
                            </span> <br />
                            <span className="italic font-water text-4xl">
                                is bold
                            </span> <br />
                            <span className="uppercase text-5xl font-extrabold tracking-wide">
                                our resolve
                            </span> <br />
                            <span className="italic font-water text-5xl">
                                is stronger than ever
                            </span> <br />
                        </div>

                        <div className="text-white text-xl font-playfair p-[2vh] flex justify-center items-center w-full">
                            We are a platform committed to empowering underserved communities by providing them with a space to sell their products and grow their businesses. <br />
                            <br />
                            Our mission is to break the cycle of poverty, enabling individuals to achieve self-sufficiency and create sustainable livelihoods. By connecting talented artisans with a global audience, we foster economic independence and inspire hope. Every purchase you make supports their journey, helping to build a brighter, more equitable future for all.
                        </div>
                    </div>
                </div>

                <div className="h-[89.8vh] w-[42.2vw]">
                    <img 
                        src="/pics/aboutus.jpg" 
                        alt="About Us" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
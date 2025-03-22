import React from "react";

const  About= () => {
    return (  
        <div className="w-screen bg-gradient-custom m-0 h-[89.8vh] relative">
            <div className=" text-white text-6xl font-playfair p-5 absolute left-80 top-1 font-bold">
                ABOUT US
            </div>
            <div>
            <div className="text-white font-titan text-4xl p-8 w-[57.8vw] absolute top-[15vh]">
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

                <div className="text-white text-xl absolute bottom-[8vh] font-playfair p-10 flex justify-center items-center w-[57.8vw]">
                We are a platform committed to empowering underserved communities by providing them with a space to sell their products and grow their businesses. <br></br>
                <br></br>
                Our mission is to break the cycle of poverty, enabling individuals to achieve self-sufficiency and create sustainable livelihoods. By connecting talented artisans with a global audience, we foster economic independence and inspire hope. Every purchase you make supports their journey, helping to build a brighter, more equitable future for all.               
                 </div>
                <div className="absolute right-0 top-0 h-[89.8vh] w-[42.2vw]">
                    <img src="/pics/aboutuspic.png" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default About;
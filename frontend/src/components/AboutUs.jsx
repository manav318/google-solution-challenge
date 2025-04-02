// import React from "react";

// const About = () => {
//     return (
//         <div className="w-screen bg-gradient-custom m-0 h-[89.8vh]">
//             <div className="flex h-full">
//                 <div className="w-[57.8vw] h-full pl-[1vw]">
//                     <div className="text-white text-6xl font-playfair p-[3vh] pl-[20vw] font-bold mb-[3vh]">
//                         ABOUT US
//                     </div>
//                     <div>
//                         <div className="text-white font-titan text-4xl p-[3vh] w-full mb-[2vh]">
//                             <span className="uppercase text-5xl font-extrabold tracking-wide">
//                                 our vision
//                             </span> <br />
//                             <span className="italic font-water text-4xl">
//                                 is bold
//                             </span> <br />
//                             <span className="uppercase text-5xl font-extrabold tracking-wide">
//                                 our resolve
//                             </span> <br />
//                             <span className="italic font-water text-5xl">
//                                 is stronger than ever
//                             </span> <br />
//                         </div>

//                         <div className="text-white text-xl font-playfair p-[2vh] flex justify-center items-center w-full">
//                             We are a platform committed to empowering underserved communities by providing them with a space to sell their products and grow their businesses. <br />
//                             <br />
//                             Our mission is to break the cycle of poverty, enabling individuals to achieve self-sufficiency and create sustainable livelihoods. By connecting talented artisans with a global audience, we foster economic independence and inspire hope. Every purchase you make supports their journey, helping to build a brighter, more equitable future for all.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="h-[89.8vh] w-[42.2vw]">
//                     <img 
//                         src="/pics/aboutus.jpg" 
//                         alt="About Us" 
//                         className="w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;



import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#213e90] to-[#000428] text-[#e0f7ff] px-6 py-16">
      <div className="max-w-5xl text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white border-opacity-20 transition-transform transform hover:scale-105">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#b3e5fc] tracking-wide mb-6">
          About <span className="text-white">Us</span>
        </h1>

        {/* Vision and Mission Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          OUR VISION <span className="text-[#b3e5fc]">is bold</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          OUR RESOLVE <span className="text-[#b3e5fc]">is stronger than ever</span>
        </h2>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed text-white text-opacity-90">
          At <strong>GENUITY</strong>, we are committed to 
          <span className="text-[#b3e5fc]"> empowering underserved communities </span> 
          by providing them with a platform to <span className="text-[#b3e5fc]">sell their products and grow their businesses</span>.
        </p>

        <p className="mt-4 text-lg md:text-xl text-white text-opacity-90">
          Our mission is to <strong>break the cycle of poverty</strong> by enabling individuals to achieve 
          <span className="text-[#b3e5fc]"> self-sufficiency and create sustainable livelihoods</span>. 
          By connecting talented artisans with a <span className="text-[#b3e5fc]">global audience</span>, 
          we foster <strong>economic independence</strong> and inspire hope.
        </p>

        {/* Image Section
        <div className="mt-8 flex justify-center">
          <img
            src="/pics/aboutus.jpg"
            alt="About Us"
            className="w-full max-w-lg rounded-lg shadow-lg object-cover transition-transform hover:scale-110"
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;


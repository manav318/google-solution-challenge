import React from "react";

const  Welcome= () => {
    return (  
        <div className="w-screen bg-slate-400 m-0 h-[785px] relative">
        <img src="/pics/waves.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-black rounded-full w-64 h-64 flex items-center justify-center">
            <div className="text-8xl font-serif tracking-[0.5em] font-bold px-5">
                    <span className="text-black">G</span>
                    <span className="text-black">E</span>
                    <span className="text-white">N</span>
                    <span className="text-white">U</span>
                    <span className="text-white">I</span>
                    <span className="text-black">T</span>
                    <span className="text-black">Y</span>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Welcome;
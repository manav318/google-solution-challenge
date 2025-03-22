import React from "react";
import Slider1 from "../components/Slider1.jsx"
import { Link } from "react-router-dom";

const partners = () => {
    return (  
        <div className="w-screen bg-white-400 m-0 h-[82vh] relative items-center py-4">
            <div className="text-blue-950 font-sans text-5xl text-center mt-5">
                OUR ESTEEMED PARTNERS
            </div>
            <Slider1/>
            <div className="text-black mt-5 font-sans text-2xl text-center">
                want to partner with us?  
                <Link
                to="/partner-with-us" 
                className="text-blue-800 mt-5 font-serif text-2xl text-center p-4 underline">
                    LET US KNOW 
                </Link>
            </div>
        </div>
    );
}
 
export default partners;
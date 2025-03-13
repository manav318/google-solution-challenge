import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return ( 
        <div className="h-screen flex flex-col justify-center items-center  overflow-hidden">
            {/* Welcome Header */}
            <div className="flex items-center gap-3">
                <h1 className="text-7xl mt-[1vh] text-blue-700 font-bold">Welcome To</h1>
                <h1 className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-9xl font-bold">
                    GENUITY
                </h1>
            </div>

            {/* Image Section */}
            <div className="h-[45vh]">
                <img src="pics/sign-up-redirect-img1.png" alt="Sign Up" className="h-full object-contain" />
            </div>

            {/* Join Us Section */}
            <div className="text-center">
                <h1 className="text-5xl text-blue-700 font-bold mb-6 mt-0">Join Us As</h1>
                <div className="flex items-center gap-16">
                    <Link 
                        to="/sign-up-user" 
                        className="bg-blue-500 text-white text-2xl font-bold px-8 py-4 rounded-full shadow-xl hover:bg-blue-600 transition duration-300">
                        User
                    </Link>
                    <Link 
                        to="/sign-up-seller" 
                        className="bg-blue-500 text-white text-2xl font-bold px-8 py-4 rounded-full shadow-xl hover:bg-blue-600 transition duration-300">
                        Seller
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

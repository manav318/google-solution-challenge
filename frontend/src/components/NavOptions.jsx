import React, { useState } from "react";
import { Link } from "react-router-dom";

const options = () => {
    const [clickedLink, setClickedLink] = useState("");
    return (
        <div className='absolute text-white font-semibold flex items-center justify-between gap-1 text-xl right-1 bottom-1'>
            <Link
                to="/"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => {
                    setClickedLink("home");
                    window.scrollTo(0, 0); // Reset scroll position to top
                }}
            >
                Home
            </Link>
            <Link
                to="/store"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("store")}
            >
                Store
            </Link>
            <Link
                to="/dashboard-campaign"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("campaign")}
            >
                Campaigns
            </Link>
            if(loggedinTokken===false){
            <Link
                to="/login"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                Register
            </Link>
}
else{
            <Link
                to="/Profile"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                Profile
            </Link>}
            {/* <Link
                to="/sign-up-redirect"
                className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("signup")}
            >
                Sign Up
            </Link> */}
        </div>
    )
}

export default options;